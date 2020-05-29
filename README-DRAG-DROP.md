# Drag & Drop for widgets 

## Goal

Implement ability to change widget position and size by using mouse.

Each widget should have some handle area (on the top), which can be used to 
grab widget and drag it to any place on screen.

Each widget should handle mouse click/drag/dragEnd events in the right-bottom 
corner of widget rectangle and change the size of the widget accordingly.

## Bonus points

- Implement event throttling.
When you do mouse move events, callbacks fired too many times without any practical sense,
because each of those events contains sufficient information about the mouse movement.

So it's quite common case that developers do "combine" those events and react only for 
some of them with reasonable discretion time. Like at rate of 20 times a second (so with 
50ms intervals).

You can try to use throttle/debounce functions which are available in the lodash library.

- Implement drag cancellation
If you can allow user to hit Escape key during the drag, effectively canceling drag 
operation (and reverting to original position/size of widget) - it would be also very
good to see.

- Any other good ideas are also welcome
