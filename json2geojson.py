import json
import geojson

featureCollections = []

with open('mrt_station.json','r') as fin:
	with open('mrt_station.geojson','w') as fout:

		data = json.load(fin)
		for i in data:
			lat = float(i['fields']['lng'])
			lng = float(i['fields']['lat'])
			name = i['fields']['name_en']
			line = i['fields']['line']
			ID = int(i['fields']['ID'])
			transfer = bool(i['fields']['transfer'])
			tempPoint = geojson.Point((lng,lat))
			tempFeature = geojson.Feature(geometry = tempPoint, properties={
				'name': name,
				'line': line,
				'id': ID,
				'transfer': transfer
				})
			print('convert {} to geojson as {}'.format(i['fields']['name_en'],tempFeature))
			featureCollections.append(tempFeature)

		fout.write(geojson.dumps(geojson.FeatureCollection(featureCollections)))





