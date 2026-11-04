+++
title = "What the Git?"
description = "Git 101 for regular people: what Git is, why Baluard is built on it, and how it keeps your passwords synced and safe. No jargon."
template = "page.html"
slug = "what-the-git"
path = "what-the-git"
+++

# What the Git?

You do not need to know anything about programming to use Baluard. But Baluard is built on a tool called Git, and people keep asking us what Git is. Here is the five-minute version. No jargon, we promise.

## The final-final-2 problem

You know this dance. You have a file called `vacation-plans.doc`. You edit it and save a copy: `vacation-plans-2.doc`. Later: `vacation-plans-FINAL.doc`. Then, of course: `vacation-plans-FINAL-really.doc`. You are keeping old copies around "just in case", and the folder slowly turns into a mess.

Git is a small program that solves exactly this. It keeps **one** file and remembers **every version** of it. Each remembered version carries a note about what changed and when. Programmers call this version control. The rest of us can call it a time machine for files.

## Save points, like in video games

When you reach a hard part in a game, you save. If things go wrong later, you go back to your save and try again. Git does this for your files. At any moment it can "remember everything exactly as it is right now". Later, you can return to that exact moment, no matter what happened in between. You can look at any old version, compare it with the current one, or undo a bad change. Nothing is ever truly lost.

## Your vault keeps a notebook

Your Baluard vault is just a folder of files that lives on your own devices. Baluard keeps a special notebook for that folder. Every time something changes, Baluard adds one line to the notebook: what changed, when it changed, and a short note about why. Added a login? One line. Fixed a typo in an entry? One more line.

This notebook is why accidents do not hurt. Deleted an entry by mistake? The notebook still has it. Want last Tuesday's version of your vault? It is in there. Nothing in your vault is ever silently overwritten.

## The notebook travels to a place you choose

A notebook only helps if it survives a lost laptop. So Baluard can send the notebook (and the scrambled folder it describes) somewhere you pick:

- a private repository on GitHub or GitLab,
- your own home server,
- or even a plain USB drive.

Other password managers keep everything on the company's servers, and you have to trust that company forever. We do the opposite. Your vault and its notebook live where you decide, and we never receive a copy.

## But GitHub is not Git

People mix these two up all the time. Git is the tool that remembers versions; it works on your devices, even with no internet. GitHub is one website where people can store a copy. GitLab is another. Your own server is another.

Because Baluard is built on Git itself (and not on any company's service), it works with all of them. If GitHub disappeared tomorrow, your vault would not even notice.

## The magic trick: the notebook only holds scrambled text

Wait. If the notebook sits on GitHub, is your vault exposed? No, and this is the best part. Every line of your vault is encrypted on your device before it ever leaves. The notebook and the folder it describes contain only scrambled text. Your git provider sees gibberish. A thief who steals the whole repository sees gibberish. Even we could not read it, and we wrote the app.

Without your master password and your device keys, the notebook is unreadable. That is why we say Baluard has zero servers: even the copy stored far away is already scrambled. The details are in our [security white paper](/security/), and every claim on that page can be checked against our public source code.

## You never touch the terminal

Git normally lives in a black text window full of commands. Not here. The Baluard app does all of it quietly in the background: saving versions, syncing between your phone and your computer, and combining changes from both. Change an entry offline on your laptop while your phone changes a different one? Baluard merges both changes, and nothing is lost. You just use the app. (Developers get a full command line too, with 35 commands, if that is their idea of fun.)

## Five words worth knowing

That is the whole theory. If you are curious, these are the only Git words you will ever see us use:

- **Repository (repo):** the folder and its notebook, together. Your vault is one.
- **Commit:** one save point in the notebook.
- **Remote:** the faraway place where a copy lives, like a private GitHub repo or your home server.
- **Push and pull:** send new save points to the remote, or fetch the ones made on your other device.
- **Merge:** combine versions from two devices so nothing is lost.

Everything else is Baluard's job.

Ready to try it? [Download Baluard](/#download) and open your first vault.
