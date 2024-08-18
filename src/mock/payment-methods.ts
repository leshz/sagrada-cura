export const paymentMethods = [
  {
    id: 'efecty',
    name: 'Efecty',
    payment_type_id: 'ticket',
    status: 'active',
    secure_thumbnail: '/logos/effecty.png',
    thumbnail: '/logos/effecty.png',
    deferred_capture: 'does_not_apply',
    settings: [],
    additional_info_needed: [],
    min_allowed_amount: 5000,
    max_allowed_amount: 8000000,
    accreditation_time: 0,
    financial_institutions: [],
    processing_modes: ['aggregator']
  },
  {
    id: 'codensa',
    name: 'Crédito Fácil Codensa',
    payment_type_id: 'credit_card',
    status: 'active',
    secure_thumbnail: '/logos/codensa.gif',
    thumbnail: '/logos/codensa.gif',
    deferred_capture: 'unsupported',
    settings: [
      {
        card_number: {
          validation: 'standard',
          length: 16
        },
        bin: {
          pattern: '^(590712)',
          installments_pattern: '^(590712)',
          exclusion_pattern: null
        },
        security_code: {
          length: 3,
          card_location: 'back',
          mode: 'mandatory'
        }
      }
    ],
    additional_info_needed: [
      'cardholder_identification_number',
      'cardholder_identification_type',
      'cardholder_name'
    ],
    min_allowed_amount: 100,
    max_allowed_amount: 5000000,
    accreditation_time: 0,
    financial_institutions: [],
    processing_modes: ['aggregator']
  },
  {
    id: 'master',
    name: 'Mastercard',
    payment_type_id: 'credit_card',
    status: 'active',
    secure_thumbnail: '/logos/payment-img4.svg',
    thumbnail: '/logos/payment-img4.svg',
    deferred_capture: 'unsupported',
    settings: [
      {
        card_number: {
          validation: 'standard',
          length: 16
        },
        bin: {
          pattern:
            '^(5|(2(221|222|223|224|225|226|227|228|229|23|24|25|26|27|28|29|3|4|5|6|70|71|720)))',
          installments_pattern:
            '^(5|(2(221|222|223|224|225|226|227|228|229|23|24|25|26|27|28|29|3|4|5|6|70|71|720)))',
          exclusion_pattern:
            '^(590712|533254|534778|557555|525315|537980|523719|559749|530715|530716|530717|530710|530721|514332|529768|536782|552558|530729|530712|530724|530727|530695|510342|530719|530713|530720|530725|530726|530691|530711|530728|530714|530723|528633|524627|530718|530722|536126|518503|548185|525358|545409|535803|547692|520922|517404|516451|518092|517393|544039|526557|590309|512827|589518|589514|529448|527558|244004|241000|223108|556831|516282|554603|571839)'
        },
        security_code: {
          length: 3,
          card_location: 'back',
          mode: 'mandatory'
        }
      }
    ],
    additional_info_needed: [
      'cardholder_identification_number',
      'cardholder_identification_type',
      'cardholder_name'
    ],
    min_allowed_amount: 1000,
    max_allowed_amount: 50000000,
    accreditation_time: 2880,
    financial_institutions: [],
    processing_modes: ['aggregator']
  },
  {
    id: 'visa',
    name: 'Visa',
    payment_type_id: 'credit_card',
    status: 'active',
    secure_thumbnail: '/logos/payment-img1.svg',
    thumbnail: '/logos/payment-img1.svg',
    deferred_capture: 'supported',
    settings: [
      {
        card_number: {
          validation: 'standard',
          length: 16
        },
        bin: {
          pattern: '^(4)',
          installments_pattern: '^(4)',
          exclusion_pattern:
            '^(488233|462896|484192|441509|486367|431385|454106|489635|455982|498476|492468|491268|459317|418253|404279|423949|457605|402739|450942|457604|457603|491511|449744|453924|498534|489445|486647|481550|409355|482407|490109|477170|462940|483864|457316)'
        },
        security_code: {
          length: 3,
          card_location: 'back',
          mode: 'mandatory'
        }
      }
    ],
    additional_info_needed: [
      'cardholder_identification_number',
      'cardholder_identification_type',
      'cardholder_name'
    ],
    min_allowed_amount: 1600,
    max_allowed_amount: 30000000,
    accreditation_time: 2880,
    financial_institutions: [],
    processing_modes: ['aggregator']
  },
  {
    id: 'pse',
    name: 'PSE',
    payment_type_id: 'bank_transfer',
    status: 'active',
    secure_thumbnail: '/logos/pse-logo.svg',
    thumbnail: '/logos/pse-logo.svg',
    deferred_capture: 'does_not_apply',
    settings: [],
    additional_info_needed: ['entity_type'],
    min_allowed_amount: 1600,
    max_allowed_amount: 340000000,
    accreditation_time: 30,
  },
  {
    id: 'mercado-pago',
    name: 'MELI',
    status: 'active',
    secure_thumbnail: '/logos/mercado-pago.svg',
    thumbnail: '/logos/mercado-pago.svg'
  }
]
