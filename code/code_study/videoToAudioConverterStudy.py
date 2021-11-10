import pytube
listOfURLStudy = ["https://www.youtube.com/watch?v=yBF3pGL0ato", "https://www.youtube.com/watch?v=eKVGPqm9ZcY", "https://www.youtube.com/watch?v=2DVpys50LVE", "https://www.youtube.com/watch?v=GZhVZOJU_nE", "https://www.youtube.com/watch?v=tuFm9ucHy7s"]
addedSongsStudy = []
for i in listOfURLStudy:
    youtube = pytube.YouTube(i)
    video = youtube.streams.first()
    video = youtube.streams.get_highest_resolution()
    video.download("/Users/maxhager/brainStimula/music/study")
    addedSongsStudy.append(i)

    