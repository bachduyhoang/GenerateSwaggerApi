
import axios from 'axios';

const baseURL = 'https://your-api-url.com'; // Replace with your API base URL


/**
 * Get list of account registrations based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/account-registrations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        statusRequest: params.statusRequest,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Get account registration detail by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/account-registrations/${params.accountRegistrationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Approve an account registration (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/accounts/account-registrations/${params.accountRegistrationId}/approve`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAccount:', error);
    throw error;
  }
};

/**
 * Reject an account registration (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/accounts/account-registrations/${params.accountRegistrationId}/reject`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAccount:', error);
    throw error;
  }
};

/**
 * Get remarks of rejected account registration (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/account-registrations/${params.accountRegistrationId}/remarks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Get default bid max rec quantity by Business account id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/${params.businessAccountId}/max-bid-quantity`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Update bid max rec quantity by Business account id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/accounts/${params.businessAccountId}/max-bid-quantity`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAccount:', error);
    throw error;
  }
};

/**
 * Export list of account registrations based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/account-registrations/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        Status: params.Status,
        CompanyName: params.CompanyName
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Get list of account registrations based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        businessType: params.businessType,
        country: params.country,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Get list of account registrations based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        businessType: params.businessType,
        country: params.country,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Get business account information (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/accounts/${params.businessAccountId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAccount:', error);
    throw error;
  }
};

/**
 * Update business account information (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAccount = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/accounts/${params.businessAccountId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAccount:', error);
    throw error;
  }
};

/**
 * Get list of auctions based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        request: params.request,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Create an auction API (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/auctions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Get auction detail by Auction Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Update auction settings (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/auctions/${params.auctionId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Delete a specific auction, allow to delete when the auction is not happened yet. (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/auctions/${params.auctionId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteAdminAuction:', error);
    throw error;
  }
};

/**
 * Get available REC items (Spot RECs) of the seller from ReHash platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/available-items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Add auction items (RECs that seller want to sell) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/auctions/${params.auctionId}/items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Delete a specific auction item (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/auctions/${params.auctionId}/items/${params.auctionItemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteAdminAuction:', error);
    throw error;
  }
};

/**
 * Update a specific bid, admin can update any bid (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/auctions/bids/${params.bidId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Get bid history by BidId (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/bid-history-logs/${params.bidId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get all bids by auctionId (include won bids and lost bids) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/all-bids-result/auction-items/${params.auctionItemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get seller by sellerId (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/get-seller-by-seller-id/${params.sellerId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get tick sizes on Auction Platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/tick-sizes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Create tick size on Auction Platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/tick-sizes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Update tick size by tick size id on Auction Platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/tick-sizes/${params.tickSizeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Delete tick size by tick size id on Auction Platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/tick-sizes/${params.tickSizeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteAdminAuction:', error);
    throw error;
  }
};

/**
 * Release RECs back to seller by BidId after auction ended (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/bids/${params.bidId}/release`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Send Fee Code and retire RECs for buyers (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/bids/${params.bidId}/retire`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Release remaining RECs back to seller in Auction Item after auction ended (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/auction-items/${params.auctionItemId}/release`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Get all current bids by auctionId (without calculating won bids) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/all-bids`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get Client Access Token of this auction for Azure pubsub service (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/token`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get Client Access Token for Azure pubsub service - Generic function (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/pubsub/token`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: params.page,
        id: params.id
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Add additional bidders to an auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/auctions/${params.auctionId}/bidders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Get list bidders of an auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/bidders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Delete a specific bidder, allow to delete when the auction is not happened yet. (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/auctions/${params.auctionId}/bidders/${params.bidderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteAdminAuction:', error);
    throw error;
  }
};

/**
 * Export all bidders of an auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/bidders/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Export all won bids of an auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/${params.auctionId}/won-bids/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 *  (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/auctions/${params.auctionId}/details/images`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 *  (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/auctions/${params.auctionId}/details`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * Export bid logs history of a bid (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/auctions/bid-history-logs/${params.bidId}/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get the highest bid by auctionItemId (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/highest-bid`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        auctionItemId: params.auctionItemId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Send email to bidder in order to remind them about a new auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/auctions/${params.auctionId}/notification`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminAuction:', error);
    throw error;
  }
};

/**
 * Get statistic of auction quantity (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/statistics/quantities`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Get detail statistic of auctions (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/statistics/auctions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        From: params.From,
        To: params.To,
        IsHideZeroBidAuction: params.IsHideZeroBidAuction,
        AuctionStatus: params.AuctionStatus,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Export statistic of auction bidding data (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/statistics/auction-bidding-data/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        From: params.From,
        To: params.To,
        IsHideZeroBidAuction: params.IsHideZeroBidAuction,
        AuctionStatus: params.AuctionStatus
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Export statistic of auction business accounts (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/statistics/auction-business-accounts/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        From: params.From,
        To: params.To,
        IsHideZeroBidAuction: params.IsHideZeroBidAuction,
        AuctionStatus: params.AuctionStatus
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Refresh statistic of auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/statistics/auctions/refresh`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminAuction:', error);
    throw error;
  }
};

/**
 * Cancel bid (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/auctions/bids/${params.bidId}/cancel`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminAuction:', error);
    throw error;
  }
};

/**
 * API Get List of Buy Order with pagination (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/buy-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        FuelType: params.FuelType,
        Vintage: params.Vintage,
        Status: params.Status,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminBuyOrder:', error);
    throw error;
  }
};

/**
 * API Get a Buy Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/buy-orders/${params.buyOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminBuyOrder:', error);
    throw error;
  }
};

/**
 * Export all buy orders history (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/buy-orders/export`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        FuelType: params.FuelType,
        Vintage: params.Vintage,
        Status: params.Status,
        Search: params.Search
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminBuyOrder:', error);
    throw error;
  }
};

/**
 * API Reject Buy Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/buy-orders/${params.buyOrderId}/reject`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminBuyOrder:', error);
    throw error;
  }
};

/**
 * API Approve Buy Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/buy-orders/${params.buyOrderId}/approve`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminBuyOrder:', error);
    throw error;
  }
};

/**
 * API Get List of Sell Order with pagination (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/sell-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        FuelType: params.FuelType,
        Vintage: params.Vintage,
        Tab: params.Tab,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Create a Sell Order (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/admin/sell-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Update a Sell Order (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/sell-orders/${params.sellOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Get a Sell Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/admin/sell-orders/${params.sellOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Update a Sell Order Detail (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/sell-orders/details/${params.sellOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Publish a Sell Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/admin/sell-orders/${params.sellOrderId}/publish`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putAdminSellOrder:', error);
    throw error;
  }
};

/**
 * API Cancel a Sell Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteAdminSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/admin/sell-orders/${params.sellOrderId}/cancel`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteAdminSellOrder:', error);
    throw error;
  }
};

/**
 * Register to join a public auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/bidder/auctions/${params.auctionId}/register`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postBidderAuction:', error);
    throw error;
  }
};

/**
 * Submit initial bids for an auction, max 3 bids per auction item (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/bidder/submit-initial-bids`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postBidderAuction:', error);
    throw error;
  }
};

/**
 * Create bid in live auction (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/bidder/create-bid`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postBidderAuction:', error);
    throw error;
  }
};

/**
 * Update a specific bid (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/bidder/auctions/bids/${params.bidId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putBidderAuction:', error);
    throw error;
  }
};

/**
 * Get the highest bid by auctionItemId (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/bidder/highest-bid`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        auctionItemId: params.auctionItemId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getBidderAuction:', error);
    throw error;
  }
};

/**
 *  (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/bidder/bid-history-logs/${params.bidId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getBidderAuction:', error);
    throw error;
  }
};

/**
 * Get all bids of a user by auctionId (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getBidderAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/bidder/auctions/${params.auctionId}/my-bids`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getBidderAuction:', error);
    throw error;
  }
};

/**
 * Get all country info (country name and code) that the system support (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/countries`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 * Get all energy types that the system support (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/energy-types`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 * Get all users (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 * Get minimum tick size (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/tick-sizes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 * Get province by country code (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/provinces/${params.countryCode}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 * Get province by country code (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getData = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/data/business-types`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getData:', error);
    throw error;
  }
};

/**
 *  (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postFiles = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/files/${params.entityId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postFiles:', error);
    throw error;
  }
};

/**
 *  (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postFiles = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/files/images/${params.entityId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postFiles:', error);
    throw error;
  }
};

/**
 * Get user profile (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getProfile = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getProfile:', error);
    throw error;
  }
};

/**
 * Get available REC items (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getSellerAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/seller/auctions/${params.auctionId}/available-items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getSellerAuction:', error);
    throw error;
  }
};

/**
 * Add auction items (RECs that seller want to sell) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postSellerAuction = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/seller/auctions/${params.auctionId}/items`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postSellerAuction:', error);
    throw error;
  }
};

/**
 * Delete a specific auction item request (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const deleteSellerAuction = async (params, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/seller/auctions/${params.auctionId}/items/${params.auctionItemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteSellerAuction:', error);
    throw error;
  }
};

/**
 * Get tick size by country name and fuel type on Auction Platform (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getSellerAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/seller/tick-sizes/get-by-params`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        country: params.country,
        fuelType: params.fuelType
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getSellerAuction:', error);
    throw error;
  }
};

/**
 * Get template content by template type
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getTemplates = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/templates/content`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        templateType: params.templateType
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getTemplates:', error);
    throw error;
  }
};

/**
 * Update template content content (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putTemplates = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/templates/${params.templateId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putTemplates:', error);
    throw error;
  }
};

/**
 * Get template type by id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getTemplates = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/templates/${params.templateId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getTemplates:', error);
    throw error;
  }
};

/**
 * Get list of templates (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getTemplates = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/templates`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getTemplates:', error);
    throw error;
  }
};

/**
 * Create new template (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postTemplates = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/templates`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postTemplates:', error);
    throw error;
  }
};

/**
 * Get list of template types (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getTemplates = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/templates/template-types`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getTemplates:', error);
    throw error;
  }
};

/**
 * Upload template file (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postTemplates = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/templates/upload`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postTemplates:', error);
    throw error;
  }
};

/**
 * Get list of User accounts (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/accounts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAccount:', error);
    throw error;
  }
};

/**
 * Create an Auction account registration (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postUserAccount = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/user/accounts/account-registrations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postUserAccount:', error);
    throw error;
  }
};

/**
 * Create an Auction account registration (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/accounts/account-registrations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAccount:', error);
    throw error;
  }
};

/**
 * Get User Account profile (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAccount = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/accounts/profile/${params.businessAccountId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAccount:', error);
    throw error;
  }
};

/**
 * Update User Account profile (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const putUserAccount = async (params, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/user/accounts/profile/${params.businessAccountId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in putUserAccount:', error);
    throw error;
  }
};

/**
 * Get list of auctions based on the filter (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/auctions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        request: params.request,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get auction detail by auctionId. (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/auctions/${params.auctionId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get all bids result by auctionId for auction owner (include won bids and lost bids) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/all-bids-result/auction-items/${params.auctionItemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get all won bids by auctionId (for bidders) (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/get-won-bids/auction-items/${params.auctionItemId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get all bids by auctionId (without calculating won bids) - New API (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/auctions/${params.auctionId}/all-bids`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get Client Access token of this auction for Azure pub sub service (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/auctions/${params.auctionId}/token`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * Get Client Access TOKEN of this auction for Azure pubsub service (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserAuction = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/auctions/pubsub/token`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page: params.page,
        id: params.id
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserAuction:', error);
    throw error;
  }
};

/**
 * API Get List of Buy Order with pagination (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/buy-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        FuelType: params.FuelType,
        Vintage: params.Vintage,
        Status: params.Status,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserBuyOrder:', error);
    throw error;
  }
};

/**
 * API Create a Buy Order (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const postUserBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/user/buy-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in postUserBuyOrder:', error);
    throw error;
  }
};

/**
 * API Get a Buy Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserBuyOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/buy-orders/${params.buyOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserBuyOrder:', error);
    throw error;
  }
};

/**
 * API Get List of Sell Order with pagination (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/sell-orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        FuelType: params.FuelType,
        Vintage: params.Vintage,
        Tab: params.Tab,
        OrderBy: params.OrderBy,
        IsDescending: params.IsDescending,
        Search: params.Search,
        CurrentPage: params.CurrentPage,
        Limit: params.Limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserSellOrder:', error);
    throw error;
  }
};

/**
 * API Get a Sell Order by Id (Auth)
 * @param {object} params - Request parameters
 * @param {string} accessToken - Bearer token for authorization
 * @returns {Promise<any>} - API response
 */
export const getUserSellOrder = async (params, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/user/sell-orders/${params.sellOrderId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserSellOrder:', error);
    throw error;
  }
};
