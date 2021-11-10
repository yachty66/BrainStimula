import pytube
listOfURLDeep = ["https://www.youtube.com/watch?v=I9Tpn-Ruq7Y", "https://www.youtube.com/watch?v=sj4VW6L1Pi0", "https://www.youtube.com/watch?v=KYoRYEc09oY", "https://www.youtube.com/watch?v=c9CnJnKfEOs", "https://www.youtube.com/watch?v=7CKLhVzabkQ", "https://www.youtube.com/watch?v=xARoscnzlww", "https://www.youtube.com/watch?v=Akm4ByqziV0"]
addedSongsDeep = []
for i in listOfURLDeep:
    youtube = pytube.YouTube(i)
    video = youtube.streams.first()
    video = youtube.streams.get_highest_resolution()
    video.download("/Users/maxhager/brainStimula/music/deep")
    addedSongsDeep.append(i)

    