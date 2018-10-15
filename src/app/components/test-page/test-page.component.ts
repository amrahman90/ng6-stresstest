import { getQuestions } from './../../data/questions';
import { Question } from './../../interfaces/question.interface';
import { Component } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.css', './result-page.css']
})
export class TestPageComponent {
    progress = 0;

    question_number = 0;

    questions: Question[];

    status = false;

    color1 = 'primary';
    mode1 = 'determinate';
    value1 = 0;
    
    color2 = 'accent';
    mode2 = 'determinate';
    value2 = 0;
    
    color3 = 'warn';
    mode3 = 'determinate';
    value3 = 0;
    
    total = 0;

    panelOpenState = false;

    type_number = 0;
    head = '';
    text = '';

    constructor() {
        this.questions = getQuestions();    
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
        this.status = true;
        this.questions.map(data => {
            if (data.type == 'kognitiv') {
                this.value1 = this.value1 + ((data.degree_of_frequency + data.strength_level) / 2);
            }
            else if (data.type == 'vegetativ') {
                this.value2 = this.value2 + ((data.degree_of_frequency + data.strength_level) / 2);
            }
            else if (data.type == 'motorisch') {
                this.value3 = this.value3 + ((data.degree_of_frequency + data.strength_level) / 2);
            }
        });

        this.total = this.value1 + this.value2 + this.value3;

        this.value1 = Math.round((this.value1 / 105) * 100);
        this.value2 = Math.round((this.value2 / 105) * 100);
        this.value3 = Math.round((this.value3 / 105) * 100);

        if (this.total <= 63) {
            this.type_number = 1;
            this.head = 'Belastbarkeits-Stufe 1: gut belastbar, keine Gefährdung';
            this.text = `Sie haben statistisch einen sehr niedrigen Stress-Test-Wert. Sie leben also vermutlich in einer sozialen und beruflichen Umwelt, die nicht sehr viele Menschen in unserer heutigen Umwelt kennen und in unserer Gesellschaft zur Verfügung haben. –
                        Oder Sie haben einen meisterhaften und ständig verfügbaren Zugang zu wirksamen Entspannungs-Möglichkeiten.
                        Oder noch wichtiger: Sie sind besonders erfolgreich in der Bewältigung Ihre Anforderungen, Ihrer Aufgaben, Ihrer Ziele und Ihrer Wünsche: dazu herzlichen Glückwunsch!`;
        }
        else if (this.total <= 126) {
            this.type_number = 2;
            this.head = 'Belastbarkeits-Stufe 2: noch belastbar, keine unmittelbare Gefährdung';
            this.text = `Es geht Ihnen subjektiv eigentlich recht gut und Sie bewältigen die Anforderungen Ihrer Umwelt weitgehend erfolgreich und ohne nennenswerte Blessuren. Sie sind weitläufig zufrieden mit sich und der Welt und nicht sofort aus der Ruhe zu bringen.
                        Den kleinen bunten Reigen auffälliger oder unangemessenen Reaktionen halten Sie für die normalen Folgen Ihrer anspruchsvollen beruflichen Aufgabe , soweit Sie die Einzel-Symptome bisher überhaupt als solche wahrgenommen haben ...
                        Andererseits können einzelne stärkere „Ausreißer“ mit sehr hohem Einzelwert (5 – 7) Ihren Gesamtwert stark erhöht haben – und um diese deutlichen Signale sollten Sie sich auch besonders kümmern!
                        Diese Stufe 2 kann für die Pflege Ihrer ganzheitlichen Belastbarkeit, Ihrer Leistungs-Lust und Lebens-Freude eine hilfreiche Unterstützung sein.
                        In der Begeisterung für den Erfolg kann das achtsam dosierte Austesten der eigenen Leistungs-Kraft und der eigenen Energie-Reserven eine wichtige orientierende und vorbeugende Maßnahme sein.
                        Hier sitzt nämlich oft die Wurzel für bestimmte Vorstufen des Burnout-Syndroms!
                        Hier schwappt das Maß für die im (nicht rechtzeitig belohnten) Ehrgeiz selbst gesuchte Belastung oft über:
                        Wenn Sie sehr ehrgeizig sind und in dieser Stufe 2 über 100 Gesamt-Punkte haben, dürfen Sie sich gern schon an den Empfehlungen der Stufe 3 orientieren!`;
        }
        else if (this.total <= 189) {
            this.type_number = 3;
            this.head = 'Belastbarkeits-Stufe 3: nur durchschnittlich belastbar, langfristig ernste Gefährdung';
            this.text = `Mit Ihrem Wert zwischen 127 und 189 Punkten bewegen sich eben noch in einem relativ breiten und eben nur statistisch im Mittelfeld der Vergleichs-Stichprobe und sollten sich aktiv mit Ihrer Stress-Belastung befassen.
                        Sie registrieren ja auch schon bestimmte körperliche und seelische Empfindungen und Reaktionen, über die Sie sich ernsthaft Gedanken machen, und die sich auch nicht mehr einfach nur verdrängen oder kleinreden lassen. Und diese Fragen sollten Sie sich stellen:
                        Wie bewusst sind Ihnen die verschiedenen Anforderungen und Beanspruchungen in Ihrem beruflichen und natürlich auch in Ihrem privaten Leben? Und wie gut verfügbar sind Ihnen gleichzeitig Ihre Möglichkeiten der Befriedigung oder Bewältigung: im beruflichen Bereich, im sozialen Umfeld, in der Familie, Partnerschaft, mit Freunden, im körperlichen Bereich, in der Bewegung, in der Entspannung? ...
                        Ein erster Schritt besteht hier für Sie wahrscheinlich schon im Führen eines kleinen persönliches „Stress-Tagebuchs“: Über längere Zeitabschnitte lassen sich bestimmte Stress-Reaktionen immer deutlicher auch bestimmten Situationen zuordnen. Nicht immer direkt, oft etwas zeitversetzt.
                        Aber genau das kann das Tagebuch klären helfen. Und damit Ihre Bewusstheit und Selbst-Achtsamkeit deutlich erhöhen. Um Ihr persönliches allgemeines Tempo zu drosseln und um den Erfolg Ihrer dann bewusster eingesetzten Bearbeitungs- und Bewältigungs-Energie deutlich erhöhen zu können.`;
        }
        else if (this.total <= 252) {
            this.type_number = 4;
            this.head = 'Belastbarkeits-Stufe 4: eingeschränkt belastbar, wahrnehmbare Funktions-Störungen';
            this.text = `Ihre Anfälligkeit gegenüber Ihrem äußeren oder Ihrem inneren Stressfaktoren ist Ihnen wohl bewusst und auch schon das inzwischen eingeschränkte Gefühl der Bewältigung in Ihrer Lebens-Situation.
                        Möglicherweise gehen Sie auch schon manchmal mit dem Gefühl in die Arbeit, nicht wirklich „fit“ zu sein, Und auch das Bedürfnis nach Entspannung wird Ihnen bewusster und auch das Gefühl, einfach mal richtig lang ausspannen oder Urlaub machen zu wollen. Vielleicht habe Sie auch schon Erfahrung mit kleinen Unterstützern aus der Apotheke. - Tun Sie’s nicht!
                        Machen Sie keine Gewohnheit daraus. Es gibt viele andere Möglichkeiten der Hilfe zu aktiver Bewältigung und Lebensfreude. Ganzheitlich. Langfristig. Professionell !`;
        }
        else if (this.total <= 315) {
            this.type_number = 5;
            this.head = 'Belastbarkeits-Stufe 5: sehr eingeschränkt belastbar, deutliche Funktions-Störungen';
            this.text = `Sie wissen es längst: Sie erleben überdurchschnittlich starke Belastung aus Ihrer äußeren und inneren Umwelt und aus Ihrem persönlichen Umgang damit.
                        Sie sind Stress-gefährdet und Sie sind ohne aktive Persönlichkeits-bezogene Maßnahmen langfristig auch Burnout-gefährdet. Es geht eben nicht um’s Durchhalten an sich und um die Hoffnung auf unvermutete kleine Wunder.
                        Es geht um ein Lebens-Erlebnis der aktiven Art, der Zukunfts-Orientierung und der Ziel-Freude. Sie sollten sich um systematische, professionelle Beratung bzw. Hilfe bemühen, um Ihre Lebens-Situation langfristig wieder belastbarer, leistungsfähiger und genussfähiger zu gestalten.`;
        }
    }
}