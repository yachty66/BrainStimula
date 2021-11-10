import pytube
listOfURLLight = ["https://www.youtube.com/watch?v=LznxZDX7fo4", "https://www.youtube.com/watch?v=U1FMPAyl1pg", "https://www.youtube.com/watch?v=k_xJEn77ZF8", "https://www.youtube.com/watch?v=xQ4en5Iyj8Q", "https://www.youtube.com/watch?v=ve1qr9u4W-U", "https://www.youtube.com/watch?v=vLlags7wBRU", "https://www.youtube.com/watch?v=RDLkoqAo21Y"]
addedSongsLight = []
for i in listOfURLLight:
    youtube = pytube.YouTube(i)
    video = youtube.streams.first()
    video = youtube.streams.get_highest_resolution()
    video.download("/Users/maxhager/brainStimula/music/light")
    addedSongsLight.append(i)

    