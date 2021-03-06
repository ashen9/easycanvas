import Easycanvas from 'src/index.js';
import Components from 'src/components.js';
import constants from 'karma/case.constant.js';

Easycanvas.component(Components.sequence, 'sequence');

var $canvas = document.createElement('canvas');
$canvas.width = 888;
$canvas.height = 888;
document.body.appendChild($canvas);

var $Painter = new Easycanvas.painter();
$Painter.register($canvas, {
    events: {
        click: function (e) {
            var fireConfig = createFire(e.canvasX, e.canvasY);
            $Painter.add(fireConfig);
        }
    }
});

var Fire = Easycanvas.imgLoader(constants.fire);

var createFire = function (initX, initY) {
    return Easycanvas.class.sequence({
        content: {
            img: Fire,
        },
        props: {
            frameWidth: -9,
            frameHeight: -1,
            interval: 200,
            loop: false,
        },
        style: {
            tx: initX, ty: initY,
            // tw: 120, th: 120,
        },
    });
};

$Painter.start();

describe('Feature.sequenceDiagram Test.', function () {
    it('SequenceDiagram Renders correctly.', function (done) {
        let posX = 224;
        let posY = 322;
        $Painter.add(createFire(posX, posY));
        setTimeout(() => {
            // 'createEvent' not working as expected
            // var evt = document.createEvent('MouseEvents');
            // evt.initMouseEvent('click', true, true, window, 1, 0, 0, 222, 222, false, false, false, false, 0, null);
            // $Painter.$dom.dispatchEvent(evt);
            expect($Painter.$children.length).toBe(1);
            expect($Painter.$children[0].type).toBe('img');
            expect($Painter.$children[0].props.sw).toBe(Math.round(Fire.width / 9));
            expect($Painter.$children[0].props.sh).toBe(Math.round(Fire.height));
            expect($Painter.$children[0].props.tx).toBe(Math.round(posX - Fire.width / 9 / 2));
            expect($Painter.$children[0].props.ty).toBe(Math.round(posY - Fire.height / 2));
            done();
        }, constants.waitForUpdateTime * 2);
    });
});
