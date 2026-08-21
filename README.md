# CJPS LLC Services — MVP Preview

Lean commercial-cleaning website, supply storefront, and work-order operations MVP. Development occurs on `mvp-preview`; do not promote to production without approval.

## Stack
- Next.js + TypeScript
- Supabase Auth/Postgres/Storage (configuration required)
- Stripe hosted Checkout (TEST keys only)
- Vercel Preview deployment

## Local setup
1. `npm install`
2. Copy `.env.example` to `.env.local` and supply development/test values.
3. `npm run dev`
4. Before preview: `npm run typecheck && npm run build`

## Environment variables
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_APP_URL`.

Never commit environment values. `STRIPE_SECRET_KEY` must be an `sk_test_...` key for preview; the checkout route rejects non-test secret keys.

## Supabase
Review `supabase/migrations/001_mvp.sql` before applying it to a new/non-production CJPS project. It defines only MVP profiles, customers, work orders, photos/activity, products, orders/items, and invoice references. RLS separates admin access from employee-assigned work orders.

Create a **private** Storage bucket named `work-order-photos`; do not expose work-order/customer photos publicly. Storage object policies should be scoped to authenticated admins and the employee assigned to the corresponding work order before uploads are enabled.

## Stripe
Use Stripe TEST mode only. Store checkout uses Stripe-hosted Checkout to avoid handling card data. Webhook persistence should not be enabled until `STRIPE_WEBHOOK_SECRET` is configured and signature verification is implemented/tested.

## Vercel
Import this GitHub repository, deploy the `mvp-preview` branch as a Preview, and add test/development environment variables to Preview only. Do not connect the customer production domain or promote to Production without approval.

## MVP functionality
Public branded responsive site, service overview, sample supply catalog/category filtering, cart, Stripe TEST checkout endpoint, login entry point, admin operations dashboard UI, and database/RLS foundation for customers, work orders, private photos, activity, products, orders and invoice references.

## Out of scope
Native mobile apps, GPS tracking, route optimization, payroll/time clock, advanced dispatch/recurring scheduling, QuickBooks, full CRM, warehouse/advanced inventory, SMS, advanced analytics/report builder, multi-tenant SaaS, complex RBAC, AI, employee scoring, loyalty, and marketplace features.

## Current preview limitation
The public/storefront UI can run without Supabase. Authentication and live work-order/photo workflows require a Supabase project and private bucket configuration. Demo dashboard records are placeholders and contain no real customer data. Stripe checkout remains unavailable until a TEST secret key is configured.