create table public.beans (
                              id uuid not null default gen_random_uuid (),
                              name text not null,
                              flavor_profile text not null,
                              origin text not null,
                              tags text[] null default array[]::text[],
                              image_url text not null,
                              created_at timestamp with time zone null default timezone ('utc'::text, now()),
                              constraint beans_pkey primary key (id)
) TABLESPACE pg_default;