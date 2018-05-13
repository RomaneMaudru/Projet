var previouslySelected = null
var previouslySelectedInfo = null
var images = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth']
var currentIndex = 0

function changeDisplayInfo(id) {
    document.getElementById(id).style.display = 'block'
    if (previouslySelectedInfo && previouslySelectedInfo !== id) {
        document.getElementById(previouslySelectedInfo).style.display = 'none'
    }
    previouslySelectedInfo = id
}

function hideDisplayedInfo() {
    if (previouslySelectedInfo) {
        document.getElementById(previouslySelectedInfo).style.display = 'none'
    }
    previouslySelected = null
}

function changeDisplay(id) {
    document.getElementById(id).style.display = 'block'
    if (previouslySelected && previouslySelected !== id) {
        document.getElementById(previouslySelected).style.display = 'none'
    }
    previouslySelected = id
}

function hideDisplayed() {
    if (previouslySelected) {
        document.getElementById(previouslySelected).style.display = 'none'
    }
    previouslySelected = null
}

function changeNext() {
    if (currentIndex < images.length -1) {
        changeCoverflow(++currentIndex)
    }
}

function changePrevious() {
    if (currentIndex > 0) {
        changeCoverflow(--currentIndex)
    }
}

function changeCoverflow(index) {
    currentIndex = index
    for (var i = 0; i < index && i < images.length; ++i) {

        document.getElementById(images[i] + '-item').style.zIndex = i
        document.getElementById(images[i] + '-content').style.transform = 'scale(.75) rotateY(55deg)'
        document.getElementById(images[i] + '-content').style.transformOrigin = '0% 50%'
    }
    for (var i = index; i < images.length; ++i) {
        document.getElementById(images[i] + '-item').style.zIndex = images.length - i
        if (i !== index) {
            document.getElementById(images[i] + '-content').style.transform = 'scale(.75) rotateY(-55deg)'
            document.getElementById(images[i] + '-content').style.transformOrigin = '100% 50%'
        } else {
            document.getElementById(images[i] + '-content').style.transformOrigin = '50% 100%'
            document.getElementById(images[i] + '-content').style.transform = ''
        }
    }
    document.getElementById('coverflow').style.transform = 'translateX(' + (135 * (images.length - 1) + 150) / images.length * (2 - index) + 'px)'
}