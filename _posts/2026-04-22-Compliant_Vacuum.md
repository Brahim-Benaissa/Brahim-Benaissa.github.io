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

<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

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
 ## Dark Matter Problem, RAR and BTFR

 - **Rotation Curves:** Stars and gas at the edges of galaxies orbit much faster than visible matter should allow. Instead of slowing down with distance, speeds stay flat. This persistent mismatch is the empirical foundation of the dark matter hypothesis.
 - **Radial Acceleration Relation (RAR):** There is a remarkably tight link between the acceleration measured from stellar/gas motions and the acceleration predicted by visible matter alone. This relation holds across all galaxy types, suggesting a fundamental coupling between light and motion that any theory must explain.
 - **Baryonic Tully-Fisher Relation (BTFR):** A galaxy's total visible mass scales almost perfectly with the fourth power of its rotation speed. This precise rule spans five orders of magnitude and challenges standard formation models, which expect far more variation in halo properties and baryon retention.


 ---

## The Mezzi Effect

 Standard analysis assumes space is a static, rigid grid where observed distances equal true distances. We propose instead that the vacuum behaves as a dynamic medium that flows radially inward toward mass concentrations. As light climbs out of a galaxy, it travels through this flowing vacuum, accumulating a subtle kinematic distortion along its entire path to the observer.

 The vacuum possesses a property we call **compliance**, quantified by a dimensionless constant $$C$$. This constant determines how efficiently the accumulated flow stress translates into measurable geometric distortion. We capture this effect with the **Mezzi scale factor**, $$\zeta(r)$$:

 $$r_{\text{obs}} = \zeta(r) \cdot r_{\text{true}}$$

 Here, $$\zeta(r)$$ ranges between 0 and 1. When $$\zeta < 1$$, it means our telescopes capture a radially compressed projection of the galaxy. The true physical extent is larger than photometry suggests. Crucially, a single universal value ($$C \approx 377$$) accurately reproduces observations across 175 SPARC galaxies without any galaxy-specific tuning.

 ---

## The Emergent Scaling Laws

 Geometric compression does not occur randomly; it follows strict, predictable scaling relations:

 - **Surface Density:** Compressing the radial grid artificially inflates observed density. The true density is systematically lower, scaling inversely with the square root of the size correction:

   $$\Sigma_{\text{true}}/\Sigma_{\text{obs}} \propto (R_{\text{true}}/R_{\text{obs}})^{-0.5}$$

 - **Mass-Radius Mapping:** Total enclosed mass scales almost linearly with the radial correction factor:

   $$M_{\text{obs}}/M_{\text{true}} \propto r_{\text{obs}}/r_{\text{true}}$$

 - **Total Mass vs. Geometry:** The true-to-observed mass ratio follows a steep power law with the Mezzi scale factor:

   $$M_{\text{true}}/M_{\text{obs}} \propto \zeta^{-1.84}$$

   This near-inverse-square scaling means that galaxies with strong geometric compression ($$\zeta \ll 1$$) have true masses several times larger than observed.

 - **Lensing vs. Geometry:** Gravitational lensing deflection angles scale more weakly:

   $$\alpha_{\text{true}}/\alpha_{\text{obs}} \propto \zeta^{-1.26}$$

The shallower lensing slope reveals that geometric scaling affects dynamical mass more strongly than lensing mass. Although the true mass increases substantially for highly distorted systems, this mass is redistributed over proportionally larger radii, effectively diluting the surface density that governs lensing efficiency. This differential scaling provides a testable signature distinguishing geometric distortion from particle dark matter.

 - **Mass Dependence:** Low-mass galaxies experience minimal distortion ($$\zeta \approx 0.9$$), keeping them close to Euclidean geometry. Massive galaxies show extreme central compression ($$\zeta \approx 0.1$$), meaning their inner coordinates appear ten times smaller than they truly are.

 - **Freeman's Law:** When geometric distortion is removed, the central surface densities of disk galaxies converge to a truly universal value. This suggests Freeman's Law is a fundamental anchor of galactic structure, masked by observational projection effects.
 ---

## The Missing Mass

 The "missing mass" is not hidden particles—it is a coordinate illusion. By reversing the Mezzi compression, we can reconstruct the true mass distribution using a simple discrete shell method:

 1. Divide the observed galaxy profile into concentric annular shells.
 2. Expand each shell's boundary using the scale factor: $$r_{\text{true}} = r_{\text{obs}} / \zeta$$.
 3. Redistribute the visible mass over these larger true areas.

 This geometric projection dramatically improves rotation curve predictions. Across 175 galaxies, the model achieves an RMS residual of only 34 km/s, with 86.9% of galaxies matching observations within a 50% tolerance. The remaining scatter largely stems from our working assumption of perfect spherical symmetry, which naturally breaks down in real, asymmetric galactic structures.

 ---

## The Emergent MOND Behaviour

 Modified Newtonian Dynamics (MOND) successfully fits galaxy rotation curves by introducing a new characteristic acceleration scale, $$a_0$$. Our framework reproduces this behavior without altering the laws of gravity.

 When the true, larger mass distribution is evaluated at the compressed observed radii, the calculated gravitational acceleration is artificially boosted. This geometric misplacement naturally generates the exact scaling relation that MOND predicts for the deep-field limit:

 $$g_{\text{obs}} \approx \sqrt{g_{\text{bar}} \cdot a_0}$$

 In this view, $$a_0$$ is not a new fundamental constant of nature. It is a geometric crossover point that emerges from the transition between highly compressed inner regions and nearly flat outer space.

 ---

## The BTFR Normalization Offset

 The slope and zero-point of the Tully-Fisher relation have long been treated as fixed empirical rules. Our results show they are frame-dependent:

 - In the **true frame**, mass scales with velocity as $$M \propto v^{2.81}$$, closely approaching standard Newtonian expectations ($$v^2$$).
 - In the **observer frame**, geometric compression steepens the slope to $$M \propto v^{3.70}$$, aligning with the empirical $$v^4$$ law.

 Furthermore, the vertical offset (normalization) of the BTFR strongly correlates with geometric compression in observed data. Once we correct for the Mezzi effect, this correlation completely vanishes. The offset is not a signature of star formation efficiency or halo physics; it is a direct mathematical consequence of measuring a three-dimensional structure through a compressed coordinate grid.



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
📄 <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5176689" target="_blank" rel="noopener noreferrer">SSRN Preprint</a>

---
