---
title: Compliant Vacuum
author: Brahim Benaissa
date: 2026-04-22 08:31:00 +0900   
categories: [Physics, Gravity]
tags: [Ongoing]
toc: true
published: true
comments: true
pin: true

description: "A geometric reinterpretation of galactic dynamics: the Mezzi effect proposes that vacuum compliance—how spacetime responds to gravitational flow—compresses observed radial coordinates, reproducing rotation curve discrepancies, the Radial Acceleration Relation, and the Baryonic Tully-Fisher Relation without dark matter or modified gravity."
keywords: [mezzi effect, galaxy rotation curve, dark matter, astrophysics, galactic dynamics, astronomy]


---



<style>
  /* Desktop styles (larger screens) */
  .responsive-iframe {
    position: relative;
    width: 100%;
    padding-bottom: 80%;  
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }

  /* Mobile styles (smaller screens) */
  @media (max-width: 768px) {
    .responsive-iframe {
      padding-bottom: 120%;  
    }
  }
</style>




---

## A Preprint Research

This framework remains in preprint status and has not undergone formal peer review. All findings, correlations, fits, and interpretations should be considered provisional and exploratory.

The <a href="https://justpeers.com/" target="_blank" rel="noopener noreferrer"> Full Results and Computational Code</a> are provided for independent verification.

Critiques and attempts to reproduce/refute are welcome.

 ---

## Darkmatter problem, RAR and BTFR

Galaxies rotate faster than their visible matter allows. This discrepancy—Zwicky's 1933 "missing mass"—persists across scales from dwarfs to massive spirals. Two empirical relations govern this anomaly:

- **Radial Acceleration Relation (RAR):** Dynamical acceleration $g_{\text{dyn}}$ correlates precisely with baryonic acceleration $g_{\text{bar}}$ across five orders of magnitude, with scatter below 0.13 dex.
- **Baryonic Tully-Fisher Relation (BTFR):** Baryonic mass scales with asymptotic rotation velocity as $M \propto v^4$, slope $\approx 4$, normalization offset $\approx 47$ M$_\odot$ km$^{-4}$ s$^4$.

Standard cosmology invokes non-baryonic dark matter halos. MOND modifies Newtonian dynamics below acceleration $a_0 \approx 1.2 \times 10^{-10}$ m s$^{-2}$. Both require tuning: halo parameters per galaxy in $\Lambda$CDM; $a_0$ as a new constant in MOND.

---

## the mezzi effect

The vacuum flows. Inspired by Painlevé-Gullstrand coordinates, space streams radially inward toward mass at velocity:

$$v(r) = -\sqrt{\frac{2GM(r)}{r}}$$

Light climbing out of this flow accumulates kinematic distortion along the line of sight. The total normalized potential traversed is:

$$A(r) = -\frac{\sqrt{2G}}{c}\int_r^D \frac{\sqrt{M(r')}}{r'^{3/2}}dr'$$

This yields a kinematic compression factor $K(r) = \exp[A(r)]$. The vacuum possesses **compliance** $C$—a dimensionless constant governing how flow-induced stress translates into geometric distortion:

$$\zeta(r) = \exp[-C \cdot (K(r)-1)]$$

The **Mezzi scale factor** $\zeta(r) \in [0,1]$ relates observed to true radial coordinates: $r_{\text{obs}} = \zeta(r) \cdot r_{\text{true}}$. A single universal value $C = 377$ reproduces observations across 175 SPARC galaxies without galaxy-specific tuning.

---

## the emergent scaling laws

Geometric compression generates universal scaling:

- **Surface density:** $\Sigma_{\text{true}}/\Sigma_{\text{obs}} \propto (R_{\text{true}}/R_{\text{obs}})^{-0.5}$
- **Mass-radius:** $M_{\text{obs}}/M_{\text{true}} \propto r_{\text{obs}}/r_{\text{true}}$

Massive galaxies exhibit $\zeta \approx 0.1$ at their centers—coordinates compressed by 90%. Low-mass galaxies remain near-Euclidean with $\zeta \approx 0.9$. The true frame reveals Freeman's Law as intrinsic: central surface densities converge to a universal value when geometric distortion is removed.

---

## the missing mass

The discrepancy is not missing mass, but compressed coordinates. Reconstructing true geometry via discrete shell projection:

1. Discretize observed profile into annular shells
2. Transform boundaries: $r_{\text{true}} = r_{\text{obs}}/\zeta(r_{\text{obs}})$
3. Redistribute mass: $\Delta M_{\text{true}} = \Sigma_{\text{obs}} \cdot \Delta A_{\text{true}}$

The true mass exceeds observed mass by factors up to 8.6 for massive galaxies (UGC11914). Rotation curve residuals achieve RMS 34 km/s with 86.9% of galaxies within 50% tolerance. The model slightly underpredicts intermediate-mass galaxies (bias $-17$ km/s) and overpredicts high-mass systems (bias $+5$ km/s), suggesting spherical symmetry assumptions break down for complex morphologies.

---

## the emergent MOND behaviour

The Mezzi effect generates MOND-like acceleration scaling without modifying gravity. When true baryonic mass is evaluated at observed (compressed) radii:

$$\frac{g_{\text{bar}}^{(3)}}{g_{\text{bar}}^{(2)}} = \left(\frac{r_{\text{true}}}{r_{\text{obs}}}\right)^2 = \frac{1}{\zeta^2}$$

This produces a horizontal shift in log-log space matching the deep-MOND limit $g_{\text{dyn}} = \sqrt{g_{\text{bar}} a_0}$. The characteristic acceleration $a_0$ emerges geometrically from the transition between compressed inner regions and flat outer geometry—not from a new physical constant.

---

## the BTFR Normalization offset  

In the true frame, the mass-velocity slope is 2.81 (approaching Newtonian $M \propto v^2$). In the observer frame, it steepens to 3.70—statistically consistent with the empirical BTFR slope of 4.

The BTFR normalization offset $\beta$ correlates strongly with geometric compression in the observed frame ($r = 0.53$, slope 2.09). In the true frame, this correlation vanishes ($r = 0.01$, slope 0.04). The offset is not a physical constant but a geometric artifact of coordinate compression.

---

## A Call for Collaboration

To astronomers, relativists, data scientists, and theorists: I invite you to test, challenge, and refine this idea. Whether you work with rotation curves, weak lensing surveys, or foundational gravity theories, your expertise is needed.

Let us collaborate on:

- Reproduce the SPARC analysis independently, using alternative mass models and fitting techniques.  
- Compare Mezzi-corrected baryonic maps with lensing mass reconstructions from Euclid, Rubin Observatory, or JWST.  
- Apply the Mezzi scaling to cluster dynamics, can it explain lensing observation without dark matter?

---

## Explore the details

To access the **full SPARC data results**, and **computational code**, visit:  
🔗 <a href="https://justpeers.com/" target="_blank" rel="noopener noreferrer">JustPeers Page</a>

You can also read the **Research Preprint Paper** here:  
📄 <a href="https://www.preprints.org/manuscript/202604.1301 " target="_blank" rel="noopener noreferrer">SSRN Preprint</a>
