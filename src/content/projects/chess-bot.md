---
title: "Chess Bot"
desc: "A beginner level chess AI written in C++"
draft: false
badge: "c++"
githubLink: "https://github.com/UKnowWhoIm/ChessBot"
repo: "ChessBot"
---

Go to [TLDR](#tldr)

I had done Multiplayer Chess as my school project, redid the same on django after learning it. Then I looked into chess programming. At first I was just curious, but I soon learned about MiniMax, Alpha Beta pruning, etc. 

To test the waters, I made an AI for a simple game like Othello. After I successfully created a challenging AI for Othello, I proceeded to start doing it for Chess. 

Othello AI was made in django, but I really didn't notice the performance issues as the game was simple, but when it came to chess, I was stuck. Even my best optimizations couldn't get me past 3 levels. 

It was then I decided to turn to C++, after a senior talked some sense into me, I redid the entire thing in C++. Even the initial unoptimized version in C++ performed way better than in python. Eventually I managed to optimize this to look 7 moves ahead in reasonable time(<20s). 

**This project made me realize the importance of using the right tools for the right job.**

It's a dream of mine to improve this project, to atleast challenge the average player.

###### TLDR 

This is a chess bot, written in C++. As of now, it's just a challenge for only beginner chess players.