/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a la Calculadora Arlette';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Qué cálculo te gustaría hacer? Puedes decir "suma uno más dos" o "multiplica cinco por cinco".')
            .getResponse();
    }
};

//SUMA
const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 + numero2;
        const speakOutput = `Arlette. El resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

//RESTA
const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;

        // Verificar si se proporcionaron valores válidos
        if (!cantidad1 || !cantidad2) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        // Verificar si los valores son números válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero2 - numero1;
        const speakOutput = `Arlette. El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};


//MULTIPLICACIÓN
const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 * numero2;
        const speakOutput = `Arlette. El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

//DIVISIÓN
const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.dos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Error. No se puede dividir entre cero.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero2 / numero1;
        const speakOutput = `Arlette. El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

//EXTRA - POTENCIACIÓN
const PotenciacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciacionIntent';
    },
    handle(handlerInput) {
        const base = handlerInput.requestEnvelope.request.intent.slots.base.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.exponente.value;
        const numeroBase = Number(base);
        const numeroExponente = Number(exponente);

        if (isNaN(numeroBase) || isNaN(numeroExponente)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = Math.pow(numeroBase, numeroExponente);
        const speakOutput = `Arlette. El resultado de ${numeroBase} elevado a la ${numeroExponente} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

//EXTRA - LOGARITMO NATURAL
const LogaritmoNaturalIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LogaritmoNaturalIntent';
    },
    handle(handlerInput) {
        const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
        const numeroEntrada = Number(numero);

        if (isNaN(numeroEntrada) || numeroEntrada <= 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, el número debe ser positivo para calcular el logaritmo natural. Por favor, inténtalo de nuevo.')
                .reprompt('Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = Math.log(numeroEntrada);
        const speakOutput = `Arlette. El logaritmo natural de ${numeroEntrada} es ${resultado.toFixed(4)}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes decirme "sumar 5 y 3", "restar 7 y 2", "multiplicar 4 y 5" o "dividir 10 y 2". ¿Cómo puedo ayudarte?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé sobre eso. Por favor intenta nuevamente.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Sesión terminada: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Te gustaría realizar otro cálculo?')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor, intenta nuevamente.';
        console.log(`~~~~ Error manejado: ${JSON.stringify(error)}`);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        PotenciacionIntentHandler,
        LogaritmoNaturalIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
