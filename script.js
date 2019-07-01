let cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      //node TEATRO
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
      { data: { id: 'anfiteatro'} },
      { data: { id: 'palco'} },
      { data: { id: 'drama'} },
      { data: { id: 'fantochada'} },
      { data: { id: 'farsa'} },
      { data: { id: 'fingimento'} },
      { data: { id: 'aparência'} },
      { data: { id: 'disfarce'} },
      { data: { id: 'ilusão'} },

      //node DRAMA
      { data: { id: 'calamidade'} },
      { data: { id: 'catastrofe'} },
      { data: { id: 'tragédia'} },

      //node ILUSÃO
      { data: { id: 'quimera'} },
      { data: { id: 'sonho'} },  
      { data: { id: 'aparência'} },
      { data: { id: 'mistificação'} },
      { data: { id: 'engano'} },
      { data: { id: 'falseamento'} },
      
 

      //edges
      {
        data: {
          id: 'data_teatro_1',
          source: 'TEATRO',
          target: 'ridicularia'
        }
      },
      {
        data: {
          id: 'data_teatro_2',
          source: 'TEATRO',
          target: 'ridículo'
        }
      },
      {
        data: {
          id: 'data_teatro_3',
          source: 'TEATRO',
          target: 'artes'
        }
      },
      {
        data: {
          id: 'data_teatro_4',
          source: 'TEATRO',
          target: 'arena'
        }
      },
      {
        data: {
          id: 'data_teatro_5',
          source: 'TEATRO',
          target: 'visão'
        }
      },
      {
        data: {
          id: 'data_teatro_6',
          source: 'TEATRO',
          target: 'falsidade'
        }
      },
      {
        data: {
          id: 'data_teatro_7',
          source: 'TEATRO',
          target: 'dilatação'
        }
      },
      {
        data: {
          id: 'data_teatro_8',
          source: 'TEATRO',
          target: 'prolixidade'
        }
      },
      {
        data: {
          id: 'data_teatro_9',
          source: 'TEATRO',
          target: 'circunjacência'
        }
      },
      {
        data: {
          id: 'data_teatro_10',
          source: 'TEATRO',
          target: 'foco'
        }
      },
      {
        data: {
          id: 'data_teatro_11',
          source: 'TEATRO',
          target: 'largura'
        }
      },
      {
        data: {
          id: 'data_teatro_12',
          source: 'TEATRO',
          target: 'quantidade'
        }
      },
      {
        data: {
          id: 'data_teatro_13',
          source: 'TEATRO',
          target: 'alegação'
        }
      },
      {
        data: {
          id: 'data_teatro_14',
          source: 'TEATRO',
          target: 'arremedo'
        }
      },
      {
        data: {
          id: 'data_teatro_15',
          source: 'TEATRO',
          target: 'tamanho'
        }
      },
      {
        data: {
          id: 'data_teatro_16',
          source: 'TEATRO',
          target: 'situação'
        }
      },
      {
        data: {
          id: 'data_teatro_17',
          source: 'TEATRO',
          target: 'grau'
        }
      },
      {
        data: {
          id: 'data_teatro_18',
          source: 'TEATRO',
          target: 'região'
        }
      },      
      {
        data: {
          id: 'data_teatro_19',
          source: 'TEATRO',
          target: 'templo'
        }
      },
      {
        data: {
          id: 'data_teatro_20',
          source: 'TEATRO',
          target: 'espaço'
        }
      },
      {
        data: {
          id: 'data_teatro_21',
          source: 'TEATRO',
          target: 'trabalho'
        }
      },
      {
        data: {
          id: 'data_teatro_23',
          source: 'TEATRO',
          target: 'anfiteatro'
        }
      },
      {
        data: {
          id: 'data_teatro_24',
          source: 'TEATRO',
          target: 'palco'
        }
      },
      {
        data: {
          id: 'data_teatro_25',
          source: 'TEATRO',
          target: 'drama'
        }
      },
      {
        data: {
          id: 'data_teatro_26',
          source: 'TEATRO',
          target: 'fantochada'
        }
      },
      {
        data: {
          id: 'data_teatro_27',
          source: 'TEATRO',
          target: 'farsa'
        }
      },
      {
        data: {
          id: 'data_teatro_28',
          source: 'TEATRO',
          target: 'fingimento'
        }
      },
      {
        data: {
          id: 'data_teatro_29',
          source: 'TEATRO',
          target: 'aparência'
        }
      },
      {
        data: {
          id: 'data_teatro_30',
          source: 'TEATRO',
          target: 'disfarce'
        }
      },
      {
        data: {
          id: 'data_teatro_31',
          source: 'TEATRO',
          target: 'ilusão'
        }
      },      
      {
        data: {
          id: 'data_drama_2',
          source: 'drama',
          target: 'tragédia'
        }
      },
      {
        data: {
          id: 'data_drama_3',
          source: 'drama',
          target: 'calamidade'
        }
      },
      {
        data: {
          id: 'data_drama_4',
          source: 'drama',
          target: 'catastrofe'
        }
      },
      {
        data: {
          id: 'data_ilusão_1',
          source: 'ilusão',
          target: 'quimera'
        }
      },
      {
        data: {
          id: 'data_ilusão_2',
          source: 'ilusão',
          target: 'sonho'
        }
      },
      {
        data: {
          id: 'data_ilusão_3',
          source: 'ilusão',
          target: 'disfarce'
        }
      },
      {
        data: {
          id: 'data_ilusão_4',
          source: 'ilusão',
          target: 'aparência'
        }
      },      
      {
        data: {
          id: 'data_ilusão_5',
          source: 'ilusão',
          target: 'mistificação'
        }
      },
      {
        data: {
          id: 'data_ilusão_6',
          source: 'ilusão',
          target: 'engano'
        }
      },      {
        data: {
          id: 'data_ilusão_7',
          source: 'ilusão',
          target: 'falseamento'
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
      name: 'random'
  });