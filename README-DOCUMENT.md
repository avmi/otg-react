# Editable canvas with open/save abilities

## Goal

Add ability for widgets to be "selected" by clicking on them at canvas.
If widgets contains some inner components, which are able to react to clicks, also gracefully handle this case.

For "text" widgets add basic formatting capabilities (bold, italic, font size and alignment - center/left/right), 
configurable via the toolbar. If text widget selected on canvas - formatting commands should be made available, otherwise hidden. 

Add z-index re-ordering of selected widget. Clicking "Move Up" should increase z-index, while "Move Down", should decrease. 
Widgets should be placed appropriately on canvas.

Allow setting random size and random position for the selected widget.

Toolbar which naturally depend on selection should be disabled if no widget selected (which is initial state, 
until user clicks on some of visible widgets). 

Allow adding new widgets to canvas. Default text can be hard-coded for text widgets, for progress widget default 
value can be set to any random value within 0..100 range. Default position and sized can be made as random values 
(similar to Random Size/Random Position buttons).

Allow deleting of selected widget using toolbar button.

Implement ALL actions via Redux actions, adjust reducers and state accordingly. Components should yield these actions via normal Redux flow.

## Bonus points

- Implement editing of text for the text widget

- Implement popup dialog box for "Open" dialog - display some hardcoded list of documents. Visual is not important - logic first. 
All these popups should be made hideable (via Cancel button or whatever).

- Implement popup dialog for saving current document (without actual saving). Should just ask for document name and have two buttons - OK and Cancel, 
which act appropriately (hide, just with distinct handlers to allow positive and negative path).

- Move and resize of widgets by mouse is optional, but nice to see

- Any other good ideas are also welcome
