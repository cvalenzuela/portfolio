---
title: "Scenescoop"
path: "/scenescoop"
date: '2018-01-04'
url: ""
code: "https://github.com/cvalenzuela/scenescoop"
more: ""
year: "2017"
category: 'Machine Learning Tool'
description: "Scenescoop is a tool to get similar semantic scenes from a pair of videos. Basically, you input a video and get a scene that has a similar meaning in another video. You can run it as a python script or as a web app."
thumbnail: "thumbnail.jpg"
type: "main"
---

# Scenescoop

<a href='https://github.com/cvalenzuela/scenescoop'><h6>Code</h6></a>

Scenescoop is a tool to get similar semantic scenes from a pair of videos. Basically, you input a video and get a scene that has a similar meaning in another video. You can run it as a python script or as a web app.

<br/>

![description](./description.png)


Scenescoop uses the [im2text](https://github.com/tensorflow/models/tree/master/research/im2txt) tensorflow model to analyze videos on a frame to frames basis and get a description of the content of those images. Frames with the same description are grouped together to create a sequence or scene. 

Scenes are then analyzed with [spaCy](https://spacy.io/), for sentence parsing and built-in word vectors, using the average of the word vectors in the sentence. 

[Annoy](https://github.com/spotify/annoy) is finally used to create an index for fast nearest-neighbor lookup (based on [@aparrish](https://github.com/aparrish) [Plot to poem](https://github.com/aparrish/plot-to-poem/blob/master/plot-to-poem.ipynb))

# Video Demos

<div class="videoWrapper">
  <iframe src="https://www.youtube.com/embed/aaYVMsMMEjc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />
<div class="videoWrapper">
<iframe src="https://www.youtube.com/embed/ZF5W_tcnF4s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>