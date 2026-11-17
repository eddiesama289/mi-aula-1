# Mi Aula 1

A Spanish study site with two books, switched with the buttons above the unit list:
**Aula Plus 1** (A1, units 0 to 9, plus a 100-point final exam on Unidades 1–9) and
**Aula Plus 2** (A2, units 1 to 10), following the topics of Aula Internacional Plus 1 and 2.
Each unit has grammar notes, vocabulary, phrases and practice questions. Click or select any Spanish
word to look it up on WordReference.

Every unit also has graded exercises (fill in the blanks, connect the words, build the sentence,
multiple choice, reading true/false) and a 50-point exam. Vocabulary is colour-coded by gender and
word type, and you can star words to review. Progress is saved in the browser.

It is a single static page (`index.html`) with no build step.

The exercises and notes are original practice material and are not copied from the textbook.

## Deploying

This repo is connected to Vercel. Every push to `main` deploys the site to production.

From Unidad 6 on, the Practice tab is split into **Lesson 1–4** to match the daily classes (three new-material lessons plus a revision lesson); the lesson tags and extra exercises live in `lessons.js`.

Aula Plus 2 lives in `aula2.js` (the loader) and one file per unit, `aula2-u1.js` to `aula2-u10.js`. Every unit
is taught in four classes like Unidades 6–9 of book 1, so each part of every tab is tagged with its clase and every
practice set with its lesson. Book 2 units use ids 101–110 so their saved progress never mixes with book 1.
The Aula Plus 1 final exam is in `final-exam.js`.
