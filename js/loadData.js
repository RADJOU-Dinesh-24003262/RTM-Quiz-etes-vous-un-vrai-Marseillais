var busData = [];

async function loadData() {
  const response = await fetch('./lignes-des-reseaux-de-transport-rtm-regie-des-transports-de-marseille.json');
  const data = await response.json();

    busData = Object.values(data)
    .map(line => ({
        id: line.route_id,
        num: line.route_short_name,
        name: line.route_long_name,
        terminus: line.route_long_name.split(' - '),
        color: line.route_color || '#E5006B',
        shape: line.shape
    }))
    .filter(line => line.terminus.length === 2);

    console.log("Données sur les bus :", busData);
    return busData;
}

window.onload = async () => {
    await loadData();
};