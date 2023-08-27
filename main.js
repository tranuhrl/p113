function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position = (110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    image(video, 250, 0, 600, 500);
    fill('red');
    ellipse(250, 20, 55);

    fill('red');
    ellipse(250, 460, 55);

    fill('red');
    ellipse(630, 20, 55);

    fill('red');
    ellipse(630, 460, 55);

    fill('green');

    rect(228, 40, 40, 400);
    rect(608, 40, 40, 400);
    rect(275, 0, 329, 35);
    rect(275, 445, 329, 35);
}


function takeSnapshot()
{
    save('image' + 1 + '.png');
}