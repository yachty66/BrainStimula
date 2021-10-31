import pytube
listOfURLDeep = []
url = 'https://www.youtube.com/watch?v=UN6wWphtRpk'
youtube = pytube.YouTube(url)
video = youtube.streams.first()
# or
video = youtube.streams.get_highest_resolution()

video.download() # In Same Folder