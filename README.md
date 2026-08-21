# CJPS LLC Services — MVP Preview

Lean commercial-cleaning website, supply storefront, and work-order operations MVP. Development occurs on `mvp-preview`; do not promote to production without approval.

## Stack
- Next.js + TypeScript
- Supabase Auth/Postgres/Storage (production configuration is optional for the walkthrough demo)
- Stripe hosted Checkout (TEST keys only)
- Vercel Preview deployment target

## Customer walkthrough
The `/demo` route is an interactive, sample-data-only walkthrough that works without Supabase or live Stripe credentials. It lets a customer switch between Admin and Employee views, create/assign a sample work order, open assigned jobs, start work, add employee notes, simulate before/after photo uploads, complete work, review activity history, browse customers/products/payments, and return to the public storefront.

The public storefront also supports product filtering, cart actions, a quote-request demo form, and a safe checkout simulation when Stripe TEST credentials are not configured. Demo mode does not submit customer data, upload real photos, or process live payments.

## Local setup
1. `npm install`
2. Optional: copy `.env.example` to `.env.local` and supply development/test values for connected services.
3. `npm run dev`
4. Before preview: `npm run typecheck && npm run build`

## Environment variables
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_APP_URL`.

Never commit environment values. `STRIPE_SECRET_KEY` must be an `sk_test_...` key for preview; the checkout route rejects non-test secret keys.

## Supabase
Review `supabase/migrations/001_mvp.sql` before applying it to a new/non-production CJPS project. It defines only MVP profiles, customers, work orders, photos/activity, products, orders/items, and invoice references. RLS separates admin access from employee-assigned work orders.

Create a **private** Storage bucket named `work-order-photos`; do not expose work-order/customer photos publicly. Storage object policies should be scoped to authenticated admins and the employee assigned to the corresponding work order before real uploads are enabled.

## Stripe
Use Stripe TEST mode only. Store checkout uses Stripe-hosted Checkout to avoid handling card data. If TEST credentials are absent, the customer walkthrough falls back to a clearly labeled no-payment demo completion state.

## Vercel
Create a separate CJPS project from this repository and deploy the `mvp-preview` branch as a Preview. Add test/development environment variables to Preview only. Do not connect the customer production domain, modify unrelated Vercel projects, or promote to Production without approval.

## MVP functionality
Public branded responsive site, service overview, sample supply catalog/category filtering, cart, quote request walkthrough, Stripe TEST checkout endpoint, login entry point, interactive Admin/Employee walkthrough, and database/RLS foundation for customers, work orders, private photos, activity, products, orders and invoice references.

## Out of scope
Native mobile apps, GPS tracking, route optimization, payroll/time clock, advanced dispatch/recurring scheduling, QuickBooks, full CRM, warehouse/advanced inventory, SMS, advanced analytics/report builder, multi-tenant SaaS, complex RBAC, AI, employee scoring, loyalty, and marketplace features.

## Preview safety
The demo uses replaceable sample records only. Real authentication, private photo storage and persisted production workflows stay separated until a dedicated CJPS Supabase project is configured. MPBusiness is not part of this repository or deployment plan.