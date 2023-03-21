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


## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI py.zip %}"  download> 📂 Download Python Code (Zip)</a>


---

## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM 2.0/YUKI Algorithm.zip %}"  download> 📂 Download MATLAB Code (Zip)</a>


---
# What is YUKI Algorithm ?

It is an metaheuristics earch algorithm, The idea behind it is to divide the search space into small sections and focus on the local area where the best solutions are found. The search area size is dynamic and changes based on the quality of results around the best solution. Reducing the search space has advantages of simplicity and clear search behavior. However, the dynamic change of the search space increases the risk of collapsing on a local optimum. The YUKI algorithm avoids that by exploring the search space while reducing.

It creates a local search area centered around the best solution found so far X_best, with the area's size determined by the distance between this point and the MeanBest X_MeanBest. The local boundaries LT and LB are calculated using the expressions: D=|X_best-X_MeanBest |, LT=X_best+D, and LB=X_best-D.

The YUKI algorithm proposes to partition the population into two groups. One group is tasked with exploring the search space beyond the local region, while the other focuses on searching within the local region. The number of individuals in each group varies linearly, with more individuals allocated to exploring the search space beyond the local region in the initial stages of the algorithm, and more individuals dedicated to searching within the local region as the iterations progress. In the improved YUKI algorithm, this technique is replaced by a simpler version where the rate is constant throughout the iteration, and its value is set by the user. This parameter is named EXP for exploration rate, and its value is between 0 and 1, indicating the portion of the population dedicated to exploration.

The other concept of the YUKI algorithm involves creating a distribution of solutions within the local search area, and the chosen points are utilized for exploration to generate the final solutions outside the local search area. It is based on a simpler yet efficient technique that uses the distance between the locally generated points and the best historical points. This allows the distribution of the solution in multiple directions, thus a good coverage of the search space.

The algorithm gradually converges the search towards the best point, decreasing the size of the local search area, allowing for more accurate identification of refined fitness values. The goal of the algorithm is to minimize the distance between the center of the best points cloud and the position of the global best point, which will minimize the size of the local search space.

---

## <a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/YUKI ALGORITHM 1.0.docx %}"  download> 📓 Manuscript (Word.docx)</a>

---

## 📑 Cite as

YUKI Algorithm and POD-RBF for Elastostatic and dynamic crack identification. *Journal of Computational Science*. 2021. <a href="https://doi.org/10.1016/j.jocs.2021.101451" target="_blank"> https://doi.org/10.1016/j.jocs.2021.101451 </a> <a href="{{ site.baseurl }}{% link /assets/files/Preprints/YUKI Algorithm 2021.pdf %}" target="_blank">  **(Download Preprint PDF)** </a>


<p align="center">

<a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.bib %}"  download> <span style="font-size:1.2em;"> &ensp;&ensp;&ensp; BibTeX &ensp;&ensp;&ensp; |</span> </a>

<a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.enw %}"  download>  <span style="font-size:1.2em;"> &ensp;&ensp;&ensp; EndNote &ensp;&ensp;&ensp; |</span> </a>

<a target="_blank" href="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/reference file/YA1.ris %}"  download>  <span style="font-size:1.2em;"> &ensp;&ensp;&ensp; RefMan / Mendeley &ensp;&ensp;&ensp; </span> </a>

</p>


<!--
---


## 📺 Tutorial

[![IMAGE ALT TEXT](http://img.youtube.com/vi/Jz3TDvnZ3zo/0.jpg)](http://www.youtube.com/watch?v=Jz3TDvnZ3zo "Video Title")

<p align="center">

<iframe
    width="750"
    height="480"
    src="https://www.youtube.com/embed/UmX4kyB2wfg"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
</iframe>

</p>

-->

---

## 👁️‍🗨️ Read

<p align="center">

<object data="{{ site.baseurl }}{% link /assets/files/Projects/YUKI ALGORITHM/YUKI ALGORITHM 1.0.pdf %}" type="application/pdf" width="750px" height="500px"> </object>

</p>


---
