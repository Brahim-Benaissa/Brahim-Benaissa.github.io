---
title: YUKI Algorithm
author: Brahim Benaissa
date: 2023-03-13 16:07:00 +0900
categories: [Open Source Code, Optimization, Python]
tags: [Ongoing]
toc: true
published: true
comments: true
pin: true
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



## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI py.zip %}"  download>   Download Python Code (Zip)</a>


---

## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI Algorithm.zip %}"  download>   Download MATLAB Code (Zip)</a>


---
## What is YUKI Algorithm

YUKI is a population based metaheuristic for global optimization. The idea behind it is to divide the search space and concentrate the search on the local region where the best solutions are found. The size of this region is dynamic: it adapts itself to the quality of the results around the best solution. Restricting the search to a small region brings two advantages; simplicity, and a clear and easy to interpret search behavior. The risk, however, is that a dynamically shrinking region may collapse onto a local optimum. YUKI avoids this by keeping a portion of the population exploring the space outside the local region even while the region contracts.



<div class="responsive-iframe">
  <iframe src="https://brahimbenaissa.com/yuki_Ilu/yuki_algo.html"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 16px;"
          title="BC k Map" loading="lazy" allowfullscreen scrolling="no"></iframe>
</div>




The local search area is centered on the best solution found so far, X_best, and its size is determined by the distance between this point and the mean of the personal bests, X_MeanBest;the center of the "cloud of best points". The local boundaries are calculated independently for each dimension using the expressions: D =  X_best − X_MeanBest , LT = X_best + D, and LB = X_best − D, clipped to the global bounds [lb, ub]. Because the box is defined per dimension, it can shrink at different rates along different axes.

The YUKI algorithm partitions the population into two groups. One group is tasked with exploring the search space beyond the local region, while the other focuses on searching within it. In the first version, the number of individuals in each group varied linearly over the iterations; more explorers in the early stages, more exploiters as the search matured. In the improved YUKI algorithm, this is replaced by a simpler scheme in which the rate is constant throughout the search and set by the user. This parameter is named EXP (exploration rate), with a value between 0 and 1, giving the portion of the population dedicated to exploration.

New solutions are generated through a two step process. Each individual first draws a candidate point PosLoc uniformly inside the local search area. Exploiters then settle around the current best: their final position lies on the ray from X_best through PosLoc, a fine-scale move tied to the size of the local box. Explorers instead use the distance between the locally generated point and their best historical point (personal best): the new solution is placed at PosLoc + (PosLoc − pbest), i.e. the personal best mirrored through the local sample. The length and direction of the jump therefore differ from one individual to another, which spreads the solutions in multiple directions and gives a good coverage of the search space outside the local region.

As the iterations progress, the personal bests improve and gather around the promising regions, so X_MeanBest gradually approaches X_best, the distance D decreases, and the local search area contracts around the optimum; allowing increasingly accurate identification of refined fitness values. If a new global best is discovered elsewhere, the box re-expands around it before contracting again, so the search can alternate between global and local phases. The goal of the algorithm is thus to minimize the distance between the center of the cloud of best points and the global best point, which in turn minimizes the size of the local search space.

---

## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/YUKI ALGORITHM 1.0.docx %}"  download> 📓 Manuscript (Word.docx)</a>

---

##   Cite as

YUKI Algorithm and POD-RBF for Elastostatic and dynamic crack identification. *Journal of Computational Science*. 2021. <a href="https://doi.org/10.1016/j.jocs.2021.101451" target="_blank"> https://doi.org/10.1016/j.jocs.2021.101451 </a> <a href="{{ site.baseurl }}{% link /assets/files/Preprints/YUKI Algorithm 2021.pdf %}" target="_blank">  **(Download Preprint PDF)** </a>




---
