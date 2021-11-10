import pytube
listOfURLCreative = ["https://www.youtube.com/watch?v=b4CJFCpFXXI", "https://www.youtube.com/watch?v=nQypNTDNXiE", "https://www.youtube.com/watch?v=5sQtPgiQ1Fg", "https://www.youtube.com/watch?v=TTdG-yZBMX4", "https://www.youtube.com/watch?v=QRESACiQZSE", "https://www.youtube.com/watch?v=sV777x1VJVg&t=2394s", "https://www.youtube.com/watch?v=a8qVGd9s1Uk"]
addedSongsCreative = []
for i in listOfURLCreative:
    youtube = pytube.YouTube(i)
    video = youtube.streams.first()
    video = youtube.streams.get_highest_resolution()
    video.download("/Users/maxhager/brainStimula/music/creative")
    addedSongsCreative.append(i)

    