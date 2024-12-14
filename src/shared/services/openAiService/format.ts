export const MBTI_RESPONSE_FORMAT = {
  name: 'MBTI_scoring',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      EorI: {
        type: 'object',
        additionalProperties: false,
        required: ['major', 'percent', 'confidence', 'reason'],
        description: 'E or I',
        properties: {
          major: {
            desscription: 'Strong type.',
            type: 'string',
            enum: ['E', 'I'],
          },
          percent: {
            description: 'Describe how major type strong in percent.',
            type: 'number',
          },
          confidence: {
            description: "GPT's confidence of this major selection.",
            type: 'number',
          },
          reason: {
            description: 'Reason of major selection in Korea',
            type: 'string',
          },
        },
      },
      SorN: {
        type: 'object',
        additionalProperties: false,
        description: 'S or N',
        required: ['major', 'percent', 'confidence', 'reason'],
        properties: {
          major: {
            desscription: 'Strong type.',
            type: 'string',
            enum: ['S', 'N'],
          },
          percent: {
            description: 'Describe how major type strong in percent.',
            type: 'number',
          },
          confidence: {
            description: "GPT's confidence of this major selection.",
            type: 'number',
          },
          reason: {
            description: 'Reason of major selection in Korea',
            type: 'string',
          },
        },
      },
      TorF: {
        type: 'object',
        additionalProperties: false,
        description: 'T or F',
        required: ['major', 'percent', 'confidence', 'reason'],
        properties: {
          major: {
            desscription: 'Strong type.',
            type: 'string',
            enum: ['T', 'F'],
          },
          percent: {
            description: 'Describe how major type strong in percent.',
            type: 'number',
          },
          confidence: {
            description: "GPT's confidence of this major selection.",
            type: 'number',
          },
          reason: {
            description: 'Reason of major selection in Korea',
            type: 'string',
          },
        },
      },
      JorP: {
        type: 'object',
        additionalProperties: false,
        description: 'J or P',
        required: ['major', 'percent', 'confidence', 'reason'],
        properties: {
          major: {
            desscription: 'Strong type.',
            type: 'string',
            enum: ['J', 'P'],
          },
          percent: {
            description: 'Describe how major type strong in percent.',
            type: 'number',
          },
          confidence: {
            description: "GPT's confidence of this major selection.",
            type: 'number',
          },
          reason: {
            description: 'Reason of major selection in Korea',
            type: 'string',
          },
        },
      },
    },
    required: ['EorI', 'SorN', 'TorF', 'JorP'],
    additionalProperties: false,
  },
};
