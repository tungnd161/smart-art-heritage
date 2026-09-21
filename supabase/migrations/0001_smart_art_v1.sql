-- SMART ART HERITAGE V1.0
-- Apply in Supabase SQL Editor or through the Supabase CLI.
-- This migration stores learning traces while minimizing student identity data.

create extension if not exists "pgcrypto";

create type public.app_role as enum ('student', 'teacher', 'admin');
create type public.journey_status as enum ('not_started', 'observing', 'reflection_ready', 'ai_unlocked', 'creating', 'submitted', 'assessed');
create type public.ai_step as enum ('ask', 'analyze', 'advise', 'adapt', 'art_assess');
create type public.portfolio_item_type as enum ('sketch', 'concept', 'artwork', 'video');
create type public.assessment_phase as enum ('pre', 'post');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.app_role not null default 'student',
  student_code text unique,
  display_name text,
  created_at timestamptz not null default now(),
  constraint student_code_required check (role <> 'student' or student_code is not null)
);

create table public.classes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  school_year text not null,
  teacher_id uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table public.class_enrollments (
  class_id uuid not null references public.classes(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  primary key (class_id, student_id)
);

create table public.heritages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  cluster text not null,
  summary text not null,
  artistic_focus text not null,
  creative_task text not null,
  source_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.heritage_media (
  id uuid primary key default gen_random_uuid(),
  heritage_id uuid not null references public.heritages(id) on delete cascade,
  position smallint not null check (position between 1 and 15),
  storage_path text not null,
  caption text not null,
  alt_text text not null,
  source_credit text not null,
  source_url text,
  created_at timestamptz not null default now(),
  unique (heritage_id, position)
);

create table public.hotspots (
  id uuid primary key default gen_random_uuid(),
  media_id uuid not null references public.heritage_media(id) on delete cascade,
  position smallint not null default 1,
  x_percent numeric(5,2) not null check (x_percent between 0 and 100),
  y_percent numeric(5,2) not null check (y_percent between 0 and 100),
  observation_question text not null,
  verified_knowledge text not null,
  art_task text not null,
  source_url text,
  unique (media_id, position)
);

create table public.learning_journeys (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  class_id uuid references public.classes(id) on delete set null,
  heritage_id uuid not null references public.heritages(id) on delete restrict,
  status public.journey_status not null default 'not_started',
  observation_completed_at timestamptz,
  ai_unlocked_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, heritage_id)
);

create table public.hotspot_responses (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  hotspot_id uuid not null references public.hotspots(id) on delete cascade,
  observation_answer text not null,
  task_response text,
  completed_at timestamptz not null default now(),
  unique (journey_id, hotspot_id)
);

create table public.reflections_321 (
  journey_id uuid primary key references public.learning_journeys(id) on delete cascade,
  insight_1 text not null,
  insight_2 text not null,
  insight_3 text not null,
  feature_1 text not null,
  feature_1_reason text not null,
  feature_2 text not null,
  feature_2_reason text not null,
  creative_idea text not null,
  completed_at timestamptz not null default now()
);

create table public.ai_5a_steps (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  step public.ai_step not null,
  student_response text not null,
  assistant_response text,
  student_decision text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (journey_id, step)
);

create table public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  item_type public.portfolio_item_type not null,
  version smallint not null default 1 check (version > 0),
  storage_path text not null,
  caption text,
  is_final boolean not null default false,
  created_at timestamptz not null default now(),
  unique (journey_id, item_type, version)
);

create table public.artist_statements (
  journey_id uuid primary key references public.learning_journeys(id) on delete cascade,
  title text not null,
  material text,
  explanation text not null,
  reflection text not null,
  authorship_declaration text not null,
  updated_at timestamptz not null default now()
);

create table public.rubric_definitions (
  id uuid primary key default gen_random_uuid(),
  criterion text not null unique,
  description text not null,
  max_score smallint not null check (max_score > 0),
  position smallint not null unique
);

create table public.self_assessments (
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  rubric_id uuid not null references public.rubric_definitions(id) on delete restrict,
  score numeric(5,2) not null check (score >= 0),
  evidence text,
  submitted_at timestamptz not null default now(),
  primary key (journey_id, rubric_id)
);

create table public.teacher_assessments (
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  rubric_id uuid not null references public.rubric_definitions(id) on delete restrict,
  teacher_id uuid not null references public.profiles(id) on delete restrict,
  score numeric(5,2) not null check (score >= 0),
  feedback text,
  assessed_at timestamptz not null default now(),
  primary key (journey_id, rubric_id)
);

create table public.research_assessments (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.learning_journeys(id) on delete cascade,
  phase public.assessment_phase not null,
  measure text not null,
  score numeric(8,2),
  note text,
  unique (journey_id, phase, measure)
);

create table public.gallery_entries (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null unique references public.learning_journeys(id) on delete cascade,
  public_id text not null unique default encode(gen_random_bytes(9), 'hex'),
  consent_granted_at timestamptz,
  approved_by uuid references public.profiles(id) on delete set null,
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create or replace function public.current_role()
returns public.app_role
language sql stable security definer set search_path = public
as $$ select role from public.profiles where id = auth.uid() $$;

create or replace function public.is_journey_teacher(journey uuid)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.learning_journeys j
    join public.classes c on c.id = j.class_id
    where j.id = journey and c.teacher_id = auth.uid()
  ) or public.current_role() = 'admin'
$$;

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

create trigger learning_journeys_touch before update on public.learning_journeys for each row execute procedure public.touch_updated_at();
create trigger ai_5a_steps_touch before update on public.ai_5a_steps for each row execute procedure public.touch_updated_at();
create trigger artist_statements_touch before update on public.artist_statements for each row execute procedure public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.classes enable row level security;
alter table public.class_enrollments enable row level security;
alter table public.heritages enable row level security;
alter table public.heritage_media enable row level security;
alter table public.hotspots enable row level security;
alter table public.learning_journeys enable row level security;
alter table public.hotspot_responses enable row level security;
alter table public.reflections_321 enable row level security;
alter table public.ai_5a_steps enable row level security;
alter table public.portfolio_items enable row level security;
alter table public.artist_statements enable row level security;
alter table public.rubric_definitions enable row level security;
alter table public.self_assessments enable row level security;
alter table public.teacher_assessments enable row level security;
alter table public.research_assessments enable row level security;
alter table public.gallery_entries enable row level security;

create policy "profiles own or teacher" on public.profiles for select using (id = auth.uid() or public.current_role() in ('teacher', 'admin'));
create policy "profiles self update" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy "published heritage readable" on public.heritages for select using (is_published or public.current_role() in ('teacher', 'admin'));
create policy "published media readable" on public.heritage_media for select using (exists (select 1 from public.heritages h where h.id = heritage_id and (h.is_published or public.current_role() in ('teacher','admin'))));
create policy "published hotspots readable" on public.hotspots for select using (exists (select 1 from public.heritage_media m join public.heritages h on h.id = m.heritage_id where m.id = media_id and (h.is_published or public.current_role() in ('teacher','admin'))));
create policy "students manage own journeys" on public.learning_journeys for all using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "teachers read class journeys" on public.learning_journeys for select using (public.is_journey_teacher(id));
create policy "students manage own hotspot answers" on public.hotspot_responses for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read hotspot answers" on public.hotspot_responses for select using (public.is_journey_teacher(journey_id));
create policy "students manage own reflection" on public.reflections_321 for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read reflection" on public.reflections_321 for select using (public.is_journey_teacher(journey_id));
create policy "students manage own ai trace" on public.ai_5a_steps for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read ai trace" on public.ai_5a_steps for select using (public.is_journey_teacher(journey_id));
create policy "students manage own portfolio" on public.portfolio_items for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read portfolio" on public.portfolio_items for select using (public.is_journey_teacher(journey_id));
create policy "students manage own statement" on public.artist_statements for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read statement" on public.artist_statements for select using (public.is_journey_teacher(journey_id));
create policy "rubric readable" on public.rubric_definitions for select using (true);
create policy "students manage self assessment" on public.self_assessments for all using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid())) with check (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers read self assessment" on public.self_assessments for select using (public.is_journey_teacher(journey_id));
create policy "teachers manage assessments" on public.teacher_assessments for all using (teacher_id = auth.uid() and public.is_journey_teacher(journey_id)) with check (teacher_id = auth.uid() and public.is_journey_teacher(journey_id));
create policy "students read own teacher assessment" on public.teacher_assessments for select using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "teachers manage research data" on public.research_assessments for all using (public.is_journey_teacher(journey_id)) with check (public.is_journey_teacher(journey_id));
create policy "students read own research data" on public.research_assessments for select using (exists (select 1 from public.learning_journeys j where j.id = journey_id and j.student_id = auth.uid()));
create policy "owners and teachers read gallery" on public.gallery_entries for select using (exists (select 1 from public.learning_journeys j where j.id = journey_id and (j.student_id = auth.uid() or public.is_journey_teacher(j.id))));

-- Public gallery access is deliberately constrained to entries with recorded consent and approval.
create policy "approved gallery public" on public.gallery_entries for select using (consent_granted_at is not null and approved_at is not null);

insert into public.rubric_definitions (criterion, description, max_score, position) values
('Quan sát và nhận biết di sản', 'Nhận diện đặc điểm tạo hình dựa trên tư liệu quan sát.', 20, 1),
('Phân tích và cảm thụ', 'Giải thích được đường nét, hình, màu, bố cục, hoa văn/vật liệu và ý nghĩa.', 20, 2),
('Phát triển ý tưởng', 'Có phương án, biết chọn lọc và biến đổi thay vì sao chép.', 20, 3),
('Thực hành sáng tạo', 'Vận dụng yếu tố từ di sản vào sản phẩm có chủ đích.', 15, 4),
('Tính tác giả và sử dụng AI có trách nhiệm', 'Phân biệt rõ phần AI gợi ý và quyết định của học sinh.', 15, 5),
('Trình bày, phản tư và bảo tồn', 'Thuyết minh, tự đánh giá và đề xuất cách giới thiệu/bảo tồn di sản.', 10, 6)
on conflict (criterion) do nothing;

-- Create this private bucket in Dashboard (Storage) before enabling upload in the app:
-- student-work
-- Do not make it public. Add Storage policies only after validating the app path convention.
