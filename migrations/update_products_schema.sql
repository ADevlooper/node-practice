BEGIN;

ALTER TABLE IF EXISTS public.products
  ADD COLUMN IF NOT EXISTS category TEXT;

ALTER TABLE IF EXISTS public.products
  ADD COLUMN IF NOT EXISTS stock INT;

ALTER TABLE IF EXISTS public.products
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT now();

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema='public' AND table_name='products' AND column_name='price'
  ) THEN
    BEGIN
      ALTER TABLE public.products ADD COLUMN IF NOT EXISTS price_num numeric;
      UPDATE public.products SET price_num = NULLIF(price, '')::numeric;
      ALTER TABLE public.products DROP COLUMN IF EXISTS price;
      ALTER TABLE public.products RENAME COLUMN price_num TO price;
    EXCEPTION WHEN others THEN
      RAISE NOTICE 'Could not convert price to numeric safely, leaving existing price';
    END;
  ELSE
    ALTER TABLE public.products ADD COLUMN IF NOT EXISTS price numeric DEFAULT 0;
  END IF;
END$$;

COMMIT;
