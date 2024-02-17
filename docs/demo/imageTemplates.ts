import { Localization } from './localization';

type ImageTemplate = {
	name: (l: Localization)=>string;
	data: ()=>string;
};

// A set of templates that can be used in the "new image" dialog.
const templates: Record<string, ImageTemplate> = {
	lightGrid: {
		name: localization => localization.templateLightGrid,
		data: ()=>'<svg viewBox="0 0 500 500" width="500" height="500" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="js-draw--autoresize"><g class="js-draw-image-background js-draw-image-background-grid js-draw-image-background-grid-25"><path d="M500,500L500,0L0,0L0,500L500,500" fill="#ffffff"></path><path d="M0,0L500,0M0,25L500,25M0,50L500,50M0,75L500,75M0,100L500,100M0,125L500,125M0,150L500,150M0,175L500,175M0,200L500,200M0,225L500,225M0,250L500,250M0,275L500,275M0,300L500,300M0,325L500,325M0,350L500,350M0,375L500,375M0,400L500,400M0,425L500,425M0,450L500,450M0,475L500,475M0,500L500,500M0,0L0,500M25,0L25,500M50,0L50,500M75,0L75,500M100,0L100,500M125,0L125,500M150,0L150,500M175,0L175,500M200,0L200,500M225,0L225,500M250,0L250,500M275,0L275,500M300,0L300,500M325,0L325,500M350,0L350,500M375,0L375,500M400,0L400,500M425,0L425,500M450,0L450,500M475,0L475,500M500,0L500,500" fill="none" stroke="#00000033" stroke-width=".7"></path></g></svg>',
	},
	darkGrid: {
		name: localization => localization.templateDarkGrid,
		data: ()=>'<svg viewBox="0 0 500 500" width="500" height="500" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="js-draw--autoresize"><g class="js-draw-image-background js-draw-image-background-grid js-draw-image-background-grid-25"><path d="M500,500L500,0L0,0L0,500L500,500" fill="#1f1f1f"></path><path d="M0,0L500,0M0,25L500,25M0,50L500,50M0,75L500,75M0,100L500,100M0,125L500,125M0,150L500,150M0,175L500,175M0,200L500,200M0,225L500,225M0,250L500,250M0,275L500,275M0,300L500,300M0,325L500,325M0,350L500,350M0,375L500,375M0,400L500,400M0,425L500,425M0,450L500,450M0,475L500,475M0,500L500,500M0,0L0,500M25,0L25,500M50,0L50,500M75,0L75,500M100,0L100,500M125,0L125,500M150,0L150,500M175,0L175,500M200,0L200,500M225,0L225,500M250,0L250,500M275,0L275,500M300,0L300,500M325,0L325,500M350,0L350,500M375,0L375,500M400,0L400,500M425,0L425,500M450,0L450,500M475,0L475,500M500,0L500,500" fill="none" stroke="#e0e0e033" stroke-width=".7"></path></g></svg>',
	},
	emptyPageLight: {
		name: localization => localization.templateEmptyPageLight,
		data: ()=>'<svg viewBox="0 0 30 30" width="300" height="300" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="js-draw--autoresize"><style id="js-draw-style-sheet">path{stroke-linecap:round;stroke-linejoin:round;}text{white-space:pre;}</style><path d="M30,30L30,0L0,0L0,30L30,30" fill="#ffffff" class="js-draw-image-background"></path></svg>',
	},
	emptyPageDark: {
		name: localization => localization.templateEmptyPageDark,
		data: ()=>'<svg viewBox="0 0 30 30" width="300" height="300" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" class="js-draw--autoresize"><style id="js-draw-style-sheet">path{stroke-linecap:round;stroke-linejoin:round;}text{white-space:pre;}</style><path d="M30,30L30,0L0,0L0,30L30,30" fill="#1f1f1f" class="js-draw-image-background"></path></svg>',
	},
};

export default templates;