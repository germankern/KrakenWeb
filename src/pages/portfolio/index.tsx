import React, { useState } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { PortfolioClient } from '../../interfaces';
import './index.scss';
import { MainImage } from 'gatsby-plugin-image';

const getCategories = (clients: PortfolioClient[]) => {
  const categoriasUnicas = new Set();
  clients.forEach((cliente) => {
    if (cliente.categories) {
      cliente.categories.forEach((categoria) => {
        categoriasUnicas.add(categoria);
      });
    }
  });
  return Array.from(categoriasUnicas) as string[];
};

const getFilterClients = (selectedCategory: string | null, clientes: PortfolioClient[]) => {
  if (!selectedCategory) {
    return clientes;
  }
  const clientesPorCategoria = clientes.filter((cliente) => {
    return cliente.categories && cliente.categories.includes(selectedCategory);
  });
  return clientesPorCategoria;
};

const PorfolioPage = (props: Props) => {
  const clients: PortfolioClient[] = get(props, 'data.allContentfulPortfolioClient.nodes');
  const categories: string[] = getCategories(clients);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterClients = getFilterClients(selectedCategory, clients);

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleShowModal = (client: any) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  return (
    <div className="portfolio-section">
      <h2>PORTFOLIO</h2>
      <div className="categories-container">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={selectedCategory === category ? 'btn-selected' : ''}
                onClick={() => {
                  setSelectedCategory(category);
                }}>
                {category}
              </button>
            </li>
          ))}
          <button
            className="btn-remove-filters"
            onClick={() => {
              setSelectedCategory(null);
            }}>
            X
          </button>
        </ul>
      </div>
      <div className="portfolios-container">
        {filterClients.map((client) => (
          <div
            className="portfolio"
            key={client.id}
            role="button"
            tabIndex={0}
            onClick={() => handleShowModal(client)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleShowModal(client);
              }
            }}>
            <MainImage src={client.image.url} alt={client.image.description} />
            <div className="title-container">
              <h3>{client.title}</h3>
              <h4>{client.description}</h4>
            </div>
            <div className="overlay"></div>
          </div>
        ))}
        {showModal && selectedClient && (
          <div className="modal-container">
            <div className="modal">
              <div className="row-container">
                <h3>{selectedClient.title}</h3>
                <button
                  className="btn-closed-modal"
                  onClick={() => {
                    setSelectedClient(null);
                    setShowModal(false);
                  }}>
                  X
                </button>
              </div>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <MainImage src={selectedClient.image.url} alt={selectedClient.image.description} />
                <h4>{selectedClient.description}</h4>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface Props {
  data: {
    allContentfulPortfolioClient: {
      nodes: PortfolioClient[];
    };
  };
}

export default PorfolioPage;

export const pageQuery = graphql`
  query PortfolioQuery {
    allContentfulPortfolioClient {
      nodes {
        id
        title
        description
        link
        image {
          url
          description
          width
          height
        }
        categories
      }
    }
  }
`;
