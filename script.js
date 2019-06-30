let cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      //nodes
      { data: { id: 'TEATRO'} },
      { data: { id: 'ridicularia'} },
      { data: { id: 'ridículo'} },
      { data: { id: 'artes'} },
      { data: { id: 'arena'} },
      { data: { id: 'visão'} },
      { data: { id: 'falsidade'} },
      { data: { id: 'dilatação'} },
      { data: { id: 'prolixidade'} },
      { data: { id: 'circunjacência'} },
      { data: { id: 'foco'} },
      { data: { id: 'largura'} },
      { data: { id: 'quantidade'} },
      { data: { id: 'arremedo'} },
      { data: { id: 'tamanho'} },
      { data: { id: 'situação'} },
      { data: { id: 'grau'} },
      { data: { id: 'região'} },
      { data: { id: 'alegação'} },
      { data: { id: 'templo'} },
      { data: { id: 'espaço'} },
      { data: { id: 'trabalho'} },

        //sinonimos
      { data: { id: 'Sinonimos'} },
      { data: { id: 'anfiteatro'} },
      { data: { id: 'palco'} },
      { data: { id: 'drama'} },
      { data: { id: 'fantochada'} },
      { data: { id: 'farsa'} },
      { data: { id: 'fingimento'} },
      { data: { id: 'aparência'} },
      { data: { id: 'disfarce'} },
      { data: { id: 'ilusão'} },
 

      //edges
      {
        data: {
          id: 'relacionadas_1',
          source: 'TEATRO',
          target: 'ridicularia'
        }
      },
      {
        data: {
          id: 'relacionadas_2',
          source: 'TEATRO',
          target: 'ridículo'
        }
      },
      {
        data: {
          id: 'relacionadas_3',
          source: 'TEATRO',
          target: 'artes'
        }
      },
      {
        data: {
          id: 'relacionadas_4',
          source: 'TEATRO',
          target: 'arena'
        }
      },
      {
        data: {
          id: 'relacionadas_5',
          source: 'TEATRO',
          target: 'visão'
        }
      },
      {
        data: {
          id: 'relacionadas_6',
          source: 'TEATRO',
          target: 'falsidade'
        }
      },
      {
        data: {
          id: 'relacionadas_7',
          source: 'TEATRO',
          target: 'dilatação'
        }
      },
      {
        data: {
          id: 'relacionadas_8',
          source: 'TEATRO',
          target: 'prolixidade'
        }
      },
      {
        data: {
          id: 'relacionadas_9',
          source: 'TEATRO',
          target: 'circunjacência'
        }
      },
      {
        data: {
          id: 'relacionadas_10',
          source: 'TEATRO',
          target: 'foco'
        }
      },
      {
        data: {
          id: 'relacionadas_11',
          source: 'TEATRO',
          target: 'largura'
        }
      },
      {
        data: {
          id: 'relacionadas_12',
          source: 'TEATRO',
          target: 'quantidade'
        }
      },
      {
        data: {
          id: 'relacionadas_13',
          source: 'TEATRO',
          target: 'alegação'
        }
      },
      {
        data: {
          id: 'relacionadas_14',
          source: 'TEATRO',
          target: 'arremedo'
        }
      },
      {
        data: {
          id: 'relacionadas_15',
          source: 'TEATRO',
          target: 'tamanho'
        }
      },
      {
        data: {
          id: 'relacionadas_16',
          source: 'TEATRO',
          target: 'situação'
        }
      },
      {
        data: {
          id: 'relacionadas_17',
          source: 'TEATRO',
          target: 'grau'
        }
      },
      {
        data: {
          id: 'relacionadas_18',
          source: 'TEATRO',
          target: 'região'
        }
      },      
      {
        data: {
          id: 'relacionadas_19',
          source: 'TEATRO',
          target: 'templo'
        }
      },
      {
        data: {
          id: 'relacionadas_20',
          source: 'TEATRO',
          target: 'espaço'
        }
      },
      {
        data: {
          id: 'relacionadas_21',
          source: 'TEATRO',
          target: 'trabalho'
        }
      },

      {
        data: {
          id: 'sinonimo_1',
          source: 'TEATRO',
          target: 'Sinonimos'
        }
      },
      {
        data: {
          id: 'sinonimo_2',
          source: 'Sinonimos',
          target: 'anfiteatro'
        }
      },
      {
        data: {
          id: 'sinonimo_3',
          source: 'Sinonimos',
          target: 'palco'
        }
      },
      {
        data: {
          id: 'sinonimo_4',
          source: 'Sinonimos',
          target: 'drama'
        }
      },
      {
        data: {
          id: 'sinonimo_5',
          source: 'Sinonimos',
          target: 'fantochada'
        }
      },
      {
        data: {
          id: 'sinonimo_6',
          source: 'Sinonimos',
          target: 'farsa'
        }
      },
      {
        data: {
          id: 'sinonimo_7',
          source: 'Sinonimos',
          target: 'fingimento'
        }
      },
      {
        data: {
          id: 'sinonimo_8',
          source: 'Sinonimos',
          target: 'aparência'
        }
      },
      {
        data: {
          id: 'sinonimo_9',
          source: 'Sinonimos',
          target: 'disfarce'
        }
      },
      {
        data: {
          id: 'sinonimo_10',
          source: 'Sinonimos',
          target: 'ilusão'
        }
      }
    ],
    style: [
      {
        selector: 'node',
        style: {
          shape: 'circle',
          'background-color': '#99004D',
          width: '10px',
          height: '10px',
          label: 'data(id)'
        }          
      }]
  });
  cy.layout({
      name: 'cose'
  });