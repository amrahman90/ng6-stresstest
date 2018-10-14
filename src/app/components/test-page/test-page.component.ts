import { Question } from './../../interfaces/question.interface';
import { Component } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
    progress = 0;

    question_number = 0;

    questions: Question[];

    constructor() {
        this.questions = getData();
    }

    previousQuestion() {
        if(this.question_number !=0) {
            this.question_number = this.question_number - 1;
            this.progress = this.progress - 2.22222222222222222;
        }
    }
    nextQuestion() {
        if (this.question_number != (this.questions.length - 1)) {
            this.question_number = this.question_number + 1;
            this.progress = this.progress + 2.22222222222222222;
        }
    }

    evaluate() {
        console.log('asssd')
    }
}

function getData() {
    let arr: Question[] = [
        {
            id: 1,
            text: 'Ungewollte, ablenkende Tagträume oder Fantasien',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 2,
            text: 'Ideenflucht - vom Hundertsten ins Tausendste kommen',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 3,
            text: 'Spontaner oder periodischer Heißhunger oder Appetitmangel',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 4,
            text: 'Sich körperlich nicht richtig entspannen können',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 5,
            text: 'Konzentrationsstörungen – die Gedanken reißen ab',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 6,
            text: 'Kloß im Hals, und nervöse Schluckprobleme',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 7,
            text: 'Reizdarmgefühle und/oder Blähungen',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 8,
            text: 'Verspannter oder verkrampfter oder schmerzender Rücken',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 9,
            text: 'Nachfragen trotz akustischer Verständlichkeit',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 10,
            text: 'Empfindlichkeit gegen Lärm und Helligkeit',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 11,
            text: 'Schmerzen in der Nacken- oder Schultergegend',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 12,
            text: 'Etwas vergessen, verlegen, sich verwählen, verhören',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 13,
            text: 'Gedankenkarussell vor dem Einschlafen',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 14,
            text: 'Weiche Knie in bestimmten unangenehmen Situationen',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 15,
            text: 'Körperlich sehr unruhig schlafen oder/und zerschlagen aufwachen',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 16,
            text: 'Unangemessene oder/und schnelle körperliche Erschöpfung',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 17,
            text: 'Das Gefühl: es wächst mir alles über den Kopf',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 18,
            text: 'Frösteln oder Wärmestau ohne äußeren Einfluss',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 19,
            text: 'Unangemessener Stuhl- oder Harndrang',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 20,
            text: 'Neigung zum Zittern beim Heben normaler Lasten',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 21,
            text: 'Ein Gefühl unerklärlicher oder unangemessener ‘Innerer Leere‘',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 22,
            text: 'Unrhythmischer Herzschlag oder spürbares Herzstolpern',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 23,
            text: 'Unwillkürliches Zusammenzucken ohne äußeren Grund',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 24,
            text: 'Stotteransätze in bestimmten kritischen Situationen',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 25,
            text: 'Hin- und Herüberlegen vor Entscheidungen',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 26,
            text: 'Ablenkbarkeit durch unwichtige Auslöser oder Einflüsse',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 27,
            text: 'In bestimmten Situationen nicht richtig durchatmen können',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 28,
            text: 'Ohne körperliche Anstrengung vor Aufregung zittern',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 29,
            text: 'Das unbestimmte Gefühl einer inneren Unruhe',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 30,
            text: 'Übermäßiges Schwitzen ohne äußeren Grund',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 31,
            text: 'Einschlaf-, Durchschlaf- oder/und -Aufwach-Störungen',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 32,
            text: 'Spürbares Zucken um die Augenregion',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 33,
            text: 'Leicht aus der Fassung gebracht werden',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 34,
            text: 'Aufstoßen oder Sodbrennen auch ohne Bezug zur Nahrung',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 35,
            text: 'Das Empfinden körperlicher Unruhe (auch "Bewegungsdrang")',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 36,
            text: 'Verspannung im Brust- und Zwischenrippen-Bereich',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 37,
            text: 'Gefühlsmäßig unangemessene Höhenflüge oder Verstimmungen',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 38,
            text: 'Häufiges oder länger anhaltendes Nachgrübeln',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 39,
            text: 'Unangemessene Verdauung (Verstopfung oder Durchfall)',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 40,
            text: 'Müdigkeit trotz gutem und ausreichendem Schlaf',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 41,
            text: 'Eine verspannte Gesichts- oder Kiefer-Region',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 42,
            text: 'Angstgefühle ohne dass ein konkreter Grund vorliegt',
            type: 'kognitiv',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 43,
            text: 'Leicht schwindlig werden oder die Balance verlieren',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 44,
            text: 'Empfindlicher Magen, Völlegefühl, Magendrücken',
            type: 'vegetativ',
            degree_of_frequency: 0,
            strength_level: 0
        },
        {
            id: 45,
            text: 'Beidseitige Kopfschmerzen und/oder Nackenverspannung',
            type: 'motorisch',
            degree_of_frequency: 0,
            strength_level: 0
        },
    ];
    return arr;
}