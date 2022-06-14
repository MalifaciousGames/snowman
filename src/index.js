// Require normalize.css
import 'normalize.css';
// Require local CSS
import './story.css';
// Require jQuery
const $ = require('jquery');
// Require Underscore
const _ = require('underscore');
// Require Story
const Story = require('./Story.js');
// Require State
const State = require('./State.js');
// Setup global State store
window.State = State;
// Setup global jQuery
window.$ = $;
// Setup global Underscore
window._ = _;
// Create window.passage
window.passage = null;
// Create new Story instance
window.story = new Story();
// Start story
window.story.start();
