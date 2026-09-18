
---
title: YUKI Algorithm 2.0
author: Brahim Benaissa
date: 2023-03-13 16:07:00 +0900
categories: [Open Source Code, Optimization, Python]
tags: [Ongoing]
toc: true
published: true
comments: true
pin: true
---

##   Downloads

- [Download Python Code (Zip)]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI py.zip %})
- [Download MATLAB Code (Zip)]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI Algorithm.zip %})

---

## What is YUKI Algorithm

**YUKI** is a population-based metaheuristic for global optimization. Its guiding idea is to *divide the search space into a small local region and concentrate the search where the best solutions are found*: a local search area is centered on the best solution so far, and its size changes dynamically with the quality of the results around it.

Focusing the search this way has two advantages — simplicity and a clear, easy-to-interpret search behavior. The obvious danger is that a shrinking region can collapse onto a local optimum. YUKI avoids this by continuing to explore the space *outside* the local region even while the region contracts.

### The self-adapting local search box

Every iteration, the algorithm maintains two reference points:

- **X_best** — the best solution found so far, the *Center* of the search;
- **X_MeanBest** — the coordinate-wise mean of all individuals' personal bests, i.e. the center of the "cloud of best points".

The distance between these two anchors sets the size of the local search box:

```text
D  = |X_best − X_MeanBest|
LT = X_best + D          (local upper bound, clipped to ub)
LB = X_best − D          (local lower bound, clipped to lb)
```

These expressions are evaluated independently for each dimension, so the box can contract at different rates along different axes and stays inside the global bounds.

The consequence is a search region that adapts itself with no reduction schedule and no extra parameter. While the population's best points are still scattered, X_MeanBest lies far from X_best and the box is nearly as large as the whole domain — the algorithm is in *global search* mode. As the best points gather around a promising region, X_MeanBest drifts toward X_best and the box tightens automatically. In effect, the box width measures how much the swarm's memory still "disagrees" about where the optimum is.


<div class="responsive-iframe">
  <iframe src="https://brahimbenaissa.com/yuki_Ilu/yuki_algo.html"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 16px;"
          title="BC k Map" loading="lazy" allowfullscreen scrolling="no"></iframe>
</div>



### Two kinds of moves

Each iteration, the population is split into two groups: one explores beyond the local region, the other searches within it. Every individual first samples a candidate point **PosLoc** uniformly inside the local box, then generates its new solution with one of two moves:

- **Exploration move:** `x_new = 2·PosLoc − pbest`. The personal best is *reflected through* the locally sampled point. Since pbest may lie anywhere in the domain while PosLoc sits inside the small local box, the result usually lands well outside the box — a coarse jump whose length scales with the current box size. Because each individual reflects its own history in a different direction, the population spreads in many directions at once, giving a broad coverage of the space outside the local area.
- **Exploitation move:** `x_new = PosLoc + U·(PosLoc − X_best)`, with `U` uniform in `[0,1)`. The new point lies on the ray from X_best through PosLoc, stretched by a factor between 1 and 2 — a fine-scale move, tied to the size of the local box, that disperses solutions densely around the current best.

A small but important detail: any coordinate that leaves the global bounds `[lb, ub]` is not clamped but re-drawn uniformly over the whole domain. Escapees are recycled as pure global samples, injecting fresh diversity exactly when the local search pushes particles out.

### Memory, and why the box shrinks by itself

After the moves, the population is evaluated and each individual updates its personal best only on strict improvement (elitist memory). X_MeanBest is then recomputed, and X_best is updated whenever the iteration produces a new global best.

This creates the feedback loop that drives convergence:

```text
improvements → personal bests migrate toward good regions
            → X_MeanBest approaches X_best
            → the box shrinks
            → sampling concentrates around the optimum
            → finer fitness values can be resolved
```

Two mechanisms delay premature collapse:

- **the lagging mean** — personal bests that stop improving still count in X_MeanBest, so the box cannot close until essentially the whole population's memory has converged, not just the elite;
- **re-expansion on discovery** — whenever exploration finds a better basin, X_best jumps, the distance |X_best − X_MeanBest| grows again, and the box re-opens around the new candidate before contracting once more. The search can thus alternate between global and local phases several times before settling.

### The EXP parameter

In its first version, YUKI partitioned the population into two groups whose sizes varied linearly over the iterations — more explorers in the early stages, more exploiters as the search matured. YUKI 2.0 simplifies this to a constant, user-defined rate: **EXP ∈ [0, 1]** is the probability that any individual performs an exploration move in a given iteration, so the expected fraction of explorers is exactly EXP. Values around 0.5 balance coarse jumps and fine local steps; lower values tighten convergence on smooth, unimodal problems, while higher values make the search more robust on multimodal ones.

### One iteration at a glance

```text
initialize the population uniformly in [lb, ub]; evaluate
pbest_i ← x_i ;  X_best ← best of the population ;  X_MeanBest ← mean(pbest)
repeat
   D ← |X_best − X_MeanBest|                       (per dimension)
   LT, LB ← X_best ± D, clipped to [lb, ub]
   for each individual i:
       PosLoc ← uniform sample in [LB, LT]
       if rand() < EXP:  x_i ← 2·PosLoc − pbest_i              (explore)
       else:             x_i ← PosLoc + U·(PosLoc − X_best)     (exploit)
       re-draw uniformly any coordinate outside [lb, ub]
   evaluate; update pbest_i on improvement
   X_MeanBest ← mean(pbest);  update X_best if improved
until stopping criterion
```

The objective of the algorithm follows directly from this loop: minimize the distance between the center of the cloud of best points and the global best point — which is precisely what shrinks the local search space and lets YUKI zoom in on the optimum with increasing resolution.

---

##  Manuscript

- [Manuscript (Word.docx)]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/YUKI ALGORITHM 1.0.docx %})

---

##  Cite as

YUKI Algorithm and POD-RBF for Elastostatic and dynamic crack identification. *Journal of Computational Science*. 2021.
[https://doi.org/10.1016/j.jocs.2021.101451](https://doi.org/10.1016/j.jocs.2021.101451)
([Download Preprint PDF]({{ site.baseurl }}{% link /assets/files/Preprints/YUKI Algorithm 2021.pdf %}))

**Reference manager exports:**

- [BibTeX]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.bib %})
- [EndNote]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.enw %})
- [RefMan / Mendeley]({{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.ris %})
re.
