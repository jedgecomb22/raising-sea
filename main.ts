controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -20
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(4)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 8 8 f b f e f f . 
    . f e e 8 1 f d d f 1 8 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 8 8 8 8 e e f . . . 
    . . e 8 f 2 2 2 2 2 2 f 8 e . . 
    . . 8 d f 2 2 2 2 2 2 f d 8 . . 
    . . 8 8 f 8 8 7 7 8 8 f 8 8 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, controller.dx())
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
scene.cameraFollowSprite(mySprite)
