-- QuickDash waitlist — run this in the Supabase SQL editor.
-- 1) Create the table
create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  contact     text not null,
  role        text not null check (role in ('customer', 'professional')),
  location    text null,
  professions text[] null
);

-- 2) Allow anonymous inserts (the form is public). No select/update/delete for anon.
alter table public.waitlist enable row level security;

drop policy if exists "waitlist_insert_anon" on public.waitlist;
create policy "waitlist_insert_anon"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Optional: an index for browsing signups by role / date later.
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);
