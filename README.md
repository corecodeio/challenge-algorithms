<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

<h1 align="center">Code challenges</h1> 

>Building real-world solutions
from scratch along with
industry experts.


## Index

1. [Introduction](#1-introduction)
2. [Requirements](#2-requirements)
3. [Getting Started](#3-getting-started)
4. [Challenges](#4-challenges)
------

## 1. Introduction
<p>Welcome to the code challenges, here you can find different exercises that will require the best of you, meditate on the problem, try to divide it into sub-problems, create an idea and until then start programming. Remember that the most important thing is to learn in the process. We wish you the best.</p>

## 2. Requirements
<p>To test your challenges you will nedd to install <a href="https://nodejs.org/en/">Node</a>, this is because we are using <a href="https://jestjs.io/">Jest</a> to make automated tests, so you can try your solutions faster. In every challenge wi will explain you how you can make use of the automated test to try your solution.</p>

## 3. Getting Started
<p>First you need to <a href="https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo">fork this repository</a>. After forking the repository in your computer using the terminal or cli get inside the repository and run: <b><i>npm install</i></b>, this will configure all settings to test your responses. Then inside the folder with the name <b><i>challenges</i></b>, you will find the challenges, and inside every folder of a challenge you will need to create a folder with the name: <b>YOUR_GITHUB_USER_NAME</b> where you will submit your solution to the challenge. 
To test your solution you can follow the next step, supose you have the solution of the <b>challenge0</b>, place your solution inside the file: <b><i>challenges/challenge0/_test/solution.test.js</i><b>, then you can run the following command to test the specific solution:

```console
    > npm -s run test:watch -- ./challenges/challenge0/_test/solution.test.js
```
```console
    > npm -s run test:watch -- [your solution.test.js file directory on the project]
```

>Remember, always leave the **solution.js** file of every challenge in its original state (without your soulution), your solution needs to be submitted inside your GitHub username folder, as showed above. 

```
challenge-algorithms
│   README.md
│   
└───challenges
    └───challenge0
    |   |─── _test
    |   |    |   solution.test.js <-- The tests of the challenge0
    |   |   
    |   |   README.md
    |   |   solution.js
    |   |
    |   |───YOUR_GITHUB_USER_NAME
    |       │   solution.js <-- Your solution of the challenge0
    |       |   ...
    |
    └───challenge1
    |   |─── _test
    |   |    |   solution.test.js <-- The tests of the challenge1
    |   |   
    |   |   README.md
    |   |   solution.js
    |   |
    |   |───YOUR_GITHUB_USER_NAME
    |       │   solution.js <-- Your solution of the challenge1!
            |   ...
```

## 4. Challenges

1. [Pattern Chaser](challenges/pattern_chaser)
2. [K Unique Characters](challenges/k_unique_characters)
3. [Word Split](challenges/word_split)
4. [FizzBuzz](challenges/fizzbuzz)


---

<p align="center">
<q>The greatest of all weaknesses is the fear of appearing weak.</q>
<br>
― Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master
</p>

---