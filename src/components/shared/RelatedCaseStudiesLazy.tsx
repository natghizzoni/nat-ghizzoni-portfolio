"use client";

/**
 * Client-only wrapper around RelatedCaseStudies.
 * Using ssr: false prevents SSR/hydration mismatches because the
 * component's list is computed at runtime from a hardcoded array
 * that changes between deployments.
 */
import dynamic from "next/dynamic";

const RelatedCaseStudiesLazy = dynamic(
  () => import("./RelatedCaseStudies"),
  { ssr: false }
);

export default RelatedCaseStudiesLazy;
