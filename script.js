let cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      //nodes
      { data: { id: 'TEATRO'} },
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
          id: 'sinonim_a',
          source: 'TEATRO',
          target: 'anfiteatro'
        }
      },
      {
        data: {
          id: 'sinonimo_b',
          source: 'TEATRO',
          target: 'palco'
        }
      },
      {
        data: {
          id: 'sinonimo_c',
          source: 'TEATRO',
          target: 'drama'
        }
      },
      {
        data: {
          id: 'sinonimo_d',
          source: 'TEATRO',
          target: 'fantochada'
        }
      },
      {
        data: {
          id: 'sinonimo_e',
          source: 'TEATRO',
          target: 'farsa'
        }
      },
      {
        data: {
          id: 'sinonimo_f',
          source: 'TEATRO',
          target: 'fingimento'
        }
      },
      {
        data: {
          id: 'sinonimo_g',
          source: 'TEATRO',
          target: 'aparência'
        }
      },
      {
        data: {
          id: 'sinonimo_g',
          source: 'TEATRO',
          target: 'aparência'
        }
      },
      {
        data: {
          id: 'sinonimo_h',
          source: 'TEATRO',
          target: 'disfarce'
        }
      },
      {
        data: {
          id: 'sinonimo_i',
          source: 'TEATRO',
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
          label: 'data(id)'
        }
      }]
  });


  cy.layout({
      name: 'circle'
  });