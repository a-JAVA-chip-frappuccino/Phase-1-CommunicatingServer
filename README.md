# Phase 1 Lecture 4: Communicating With the Server

## Objectives

By the end of today's lecture, you will be able to identify a JSON file and code a `fetch` to grab information from it and then render that information to the screen.

## Lesson Plan

1. Familiarize yourself with the db.json file. Then run `json-server --watch db.json` to start it.
    - What data types do you see within it? Are any of these nested?
    - What is **JSON**?
    - How many endpoints do you see?
2. Grab the characters from the '/characters' endpoint and console log them.
    - What is a **GET** request? How does it relate to `fetch`?
    - Which port is the server running on?
    - Which data type did you retrieve? What might you need to do with this?
3. Render each character's name and image as separate items within the `<li>` tag.
    - Would this code work for an array of any length? Would it work for any db.json file?
    - How could you style this?

## Looking Ahead

Tomorrow's lecture will continue our work with `fetch`, this time introducing the POST request to accompany the GET request.