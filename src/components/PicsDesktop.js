import { v4 as uuid } from 'uuid';
import curiosity from "../images/desktop/image-curiosity.jpg";
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";
import fromAbove from "../images/desktop/image-from-above.jpg";
import grid from "../images/desktop/image-grid.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import pocketBorealis from "../images/desktop/image-pocket-borealis.jpg";
import soccerTeam from "../images/desktop/image-soccer-team.jpg";

export let desktopView = [
    {
        id: uuid(),
        image: deepEarth,
        text: 'deep earth'
    },
    {
        id: uuid(),
        image: nightArcade,
        text: 'night arcade'
    },
    {
        id: uuid(),
        image: soccerTeam,
        text: 'soccer team vr'
    },
    {
        id: uuid(),
        image: grid,
        text: 'the grid'
    },
    {
        id: uuid(),
        image: fromAbove,
        text: 'from up above vr'
    },
    {
        id: uuid(),
        image: pocketBorealis,
        text: 'pocket borealis'
    },
    {
        id: uuid(),
        image: curiosity,
        text: 'the curiosity'
    },
    {
        id: uuid(),
        image: fisheye,
        text: 'make it fisheye'
    },
];