export interface InterfaceInitialState {
  fetching: boolean;
  error?: string;
}

export interface InterfacePostShipments {
  address_from: {
    zip?: string;
  };
  parcels: [
    {
      weight?: number;
      height?: number;
      width?: number;
      length?: number
    }
  ];
  address_to: {
    zip?: string;
  };
}

export interface InterfacePostCreateShipments {
  data: {
    id: string;
    type: string;
    attributes: {
      status: string;
      created_at: string;
      updated_at: string
    };
    relationships: {
      parcels: {
        data: {
          id: string;
          type: string
        }
      };
      rates: {
        data: [
          {
            id: string;
            type: string
          }
        ]
      };
      address_to: {
        data: {
          id: string;
          type: string
        }
      };
      address_from: {
        data: {
          id: string;
          type: string
        }
      };
      labels: {
        data: any[] | any
      };
      consignment_note_product_class: {
        data: {
          id: number;
          name: string;
          code: string;
          subcategory_id: number;
          created_at: string;
          updated_at: string;
        };
      };
      consignment_note_packaging: {
        data: {
          id: number;
          code: string;
          name: string;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
  included: [
    {
      id: string;
      type: string;
      attributes: {
        created_at: string;
        updated_at: string;
        amount_local: string;
        currency_local: string;
        provider: string;
        service_level_name: string;
        service_level_code: string;
        service_level_terms: any;
        days: number;
        duration_terms: any;
        zone: any;
        arrives_by: any;
        out_of_area: boolean;
        out_of_area_pricing: string;
        total_pricing: string;
        is_occure: boolean;
      };
    }
  ];
}

export interface InterfaceCardService {
  idService: string | string[] | any;
}

export interface InterfaceLabel {
  data: {
    id: string;
    type: string;
    attributes: {
      created_at: string;
      updated_at: string;
      status: any;
      tracking_number: string;
      tracking_status: any;
      label_url: string;
      tracking_url_provider: string;
      rate_id: number;
      error_message: [
        {
          message: string;
        }
      ];
    }
  };
  message: string;
  code: string;
}

export interface InterfacePostLabel {
  message: string;
  code: string;
}

export interface InterfaceTableServicesBestOption {
  days: number;
  prices: number;
}
