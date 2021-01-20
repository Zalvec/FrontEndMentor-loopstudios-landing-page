import { v4 as uuid } from 'uuid';
import curiosity from "../images/mobile/image-curiosity.jpg";
import deepEarth from "../images/mobile/image-deep-earth.jpg";
import fisheye from "../images/mobile/image-fisheye.jpg";
import fromAbove from "../images/mobile/image-from-above.jpg";
import grid from "../images/mobile/image-grid.jpg";
import nightArcade from "../images/mobile/image-night-arcade.jpg";
import pocketBorealis from "../images/mobile/image-pocket-borealis.jpg";
import soccerTeam from "../images/mobile/image-soccer-team.jpg";

export let mobileView = [
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