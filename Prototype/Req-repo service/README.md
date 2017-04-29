
Req-Repo
==============

Angular Library for Drag and Drop, supports Sortable and Draggable.

#### Features:

- Connect to the application interface.
- Contact Req-Repo admin.
- Online help.
- Read about Req-Repo.
- Req-Repo services:
    - Drag both Horizontally and Vertically.
    - Drag and Drop requirements within a column.
    - Drag and Drop requirements across columns.
    - Can do Ranking by Sorting and Change Status by Moving.
    - Enable/Disable Drag at run time.
    - Drag Boundary can be defined.
    - Allows duplicate requirements to be dropped from the clones.

#### Implementation Details:

- Uses angular/native JS for sortable and draggable.
- Provides callbacks for drag/drop events.

#### Design details:

soon

#### Placeholder:
- By default a placeholder element is created using the same tag as the as-sortable-item element
- CSS styling may be applied via the `as-sortable-placeholder` class
- Additional classes may be applied via the `additionalPlaceholderClass` option provided to the as-sortable item. e.g.
    in JS:
```$scope.sortableOptions = { additionalPlaceholderClass: 'some-class' };```
    in HTML:
```<div as-sortable="sortableOptions">
   ...
</div>```
- A customized placeholder can be provided by specifying the `placeholder` option provided to the as-sortable item. `placeholder` can be both a template string or a function returning a template string.

#### Dragging element CSS
- CSS styling may be applied via the "as-sortable-dragging" class
- When the "as-sortable-item" is being dragged, the CSS class "as-sortable-dragging" is added to all elements.
e.g.
    in HTML
```<!--not dragging-->````
```<div class="as-sortable-item"></div>````
```<!--when dragging as-sortable-item-->```
```<div class="as-sortable-item as-sortable-dragging"></div>````

    in CSS
    .as-sortable-dragging{
       border: 1px dotted #000 !important;
    }
          

#### Callbacks:

Following callbacks are defined, and should be overridden to perform custom logic.

- callbacks.accept = function (sourceItemHandleScope, destSortableScope, destItemScope) {};
-> used to determine drag zone is allowed are not.

###### Parameters:
     sourceItemScope - the scope of the item being dragged.
     destScope - the sortable destination scope, the list.
     destItemScope - the destination item scope, this is an optional Param.(Must check for undefined).

- callbacks.orderChanged = function({type: Object}) // triggered when item order is changed with in the same column.
- callbacks.itemMoved = function({type: Object}) // triggered when an item is moved across columns.
- callbacks.dragStart = function({type: Object}) // triggered on drag start.
- callbacks.dragEnd = function({type: Object}) // triggered on drag end.

##### Parameters:
    Object (event) - structure         
             source:
                  index: original index before move.
                  itemScope: original item scope before move.
                  sortableScope: original sortable list scope.
             dest: index
                  index: index after move.
                  sortableScope: destination sortable scope.  
                  
##### Some Notable Fixes:

- Touch is allowed on only one Item at a time. Tap is prevented on draggable item.
- Pressing 'Esc' key will Cancel the Drag Event, and moves back the Item to it's Original location.
- Right Click on mouse is prevented on draggable Item.
- A child element inside a draggable Item can be made as non draggable.

##### Usage:

Get the binaries of ng-sortable with any of the following ways.

```sh
bower install ng-sortable
```
Or for yeoman with bower automatic include:
```
bower install ng-sortable -save
```
Or bower.json
```
{
  "dependencies": [..., "ng-sortable: "latest_version eg - "1.1.0" ", ...],
}
```
Or npm 
```
npm install ng-sortable
```
Make sure to load the scripts in your html.
```html
<script type="text/javascript" src="dist/ng-sortable.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/ng-sortable.min.css">

<!-- OPTIONAL: default style -->
<link rel="stylesheet" type="text/css" href="dist/ng-sortable.style.min.css">
```

And Inject the sortable module as dependency.

```
angular.module('xyzApp', ['as.sortable', '....']);
```

##### Html Structure:

Invoke the Directives using below html structure.

    <ul data-as-sortable="board.dragControlListeners" data-ng-model="items">
       <li data-ng-repeat="item in items" data-as-sortable-item>
          <div data-as-sortable-item-handle></div>
       </li>
    </ul>

Define your callbacks in the invoking controller.

    $scope.dragControlListeners = {
        accept: function (sourceItemHandleScope, destSortableScope) {return boolean}//override to determine drag is allowed or not. default is true.
        itemMoved: function (event) {//Do what you want},
        orderChanged: function(event) {//Do what you want},
        containment: '#board'//optional param.
        clone: true //optional param for clone feature.
        allowDuplicates: false //optional param allows duplicates to be dropped.
    };
    
    $scope.dragControlListeners1 = {
            containment: '#board'//optional param.
            allowDuplicates: true //optional param allows duplicates to be dropped.
    };
    
That's all you have to do.

##### Restrict Moving between Columns:

Define the accept callback. and the implementation is your choice.
The itemHandleScope(dragged Item) and sortableScope(destination list) is exposed. 
Compare the scope Objects there like below., If you have to exactly restrict moving between columns.

    accept: function (sourceItemHandleScope, destSortableScope) {
      return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
    }

If you want to restrict only to certain columns say you have 5 columns and you want 
the drag to be allowed in only 3 columns, then you need to implement your custom logic there.,
and that too becomes straight forward as you have your scope Objects in hand.

And reversing the condition, allows you to Drag across Columns but not within same Column.

##### How To Revert Move After Validation Failure:

In case you want the item to be reverted back to its original location after a validation failure
You can just do the below.
In your itemMoved call back define a 'moveSuccess' and 'moveFailure' callbacks.
The move failure Impl here just reverts the moved item to its original location.

    itemMoved: function (eventObj) {

    var moveSuccess, moveFailure;
          /**
           * Action to perform after move success.
           */
          moveSuccess = function() {};

          /**
           * Action to perform on move failure.
           * remove the item from destination Column.
           * insert the item again in original Column.
           */
          moveFailure = function() {   
               eventObj.dest.sortableScope.removeItem(eventObj.dest.index);
               eventObj.source.itemScope.sortableScope.insertItem(eventObj.source.index, eventObj.source.itemScope.item);
          };
    }

##### Enable/Disable Drag at Runtime:

The Drag can be controlled at runtime and you can enable/disable it by setting the "is-disabled" property to a boolean value of either true or false.

    <div as-sortable is-disabled="is-disabled-boolean-property">..</div>

##### Testing:

- Tested on FireFox, Chromium and Safari.


##### Development Environment setup:

Clone the master 
    $ git clone https://github.com/amine95bz/PFE/tree/master/Prototype/req-repo

or Download from [Source Master](https://github.com/amine95bz/PFE.git)

##### Installation:

##### Development Dependencies (Grunt and Bower):

Install Grunt and Bower.
    $ sudo npm install -g grunt-cli bower

##### Install Project dependencies:
Run the following commands from the project root directory.

    $ npm install
    $ bower install

##### Commands to run:
    $ grunt build - (builds the source.)
    $ grunt serve - (runs a local web server.)
    $ grunt test -  (runs the tests.)
    $ grunt test:continuous - (end to end test.)

To access the local server, enter the following URL into your web browser:

    http://localhost:9009/demo/
    

##### License

see [LICENSE](./LICENSE).
