# June 2023 Release

Here's what's new in version v0.9.0. Various schemas which are added/modified in this version are:<br/>


### energyConsumption
- added<br/>
### energyMeter
- added<br/>
### energySupplier
- added<br/>
### alert
- added<br/>
### dataSource
- added<br/>
### defaultValue
- added<br/>
### entityDataQuality
- added<br/>
### fleet
- added<br/>
### GeoJson
- added<br/>


### HubOperationCategory

- updated<br/>

  - **fuelTypeDATEX**
### RegionGeoJson

- removed<br/>

  - **geometry** (object): GeoJSON information of the region.
- added<br/>

  - **geoJson**
### Hub

- renamed<br/>

  - **hubId** (string ): Site/Hub/Location Id from the Organisation (not a Clearly ID).

### RegionGeoJson

- removed<br/>

  - **geometry** (object): GeoJSON information of the region.

- added<br/>

  - **geoJson**

### WeightSAPClearly

- updated<br/>

  - **customerId** ( string ): Unique Customer ID (not Clearly UUID) but the Organisation's CustomerId.

### Asset

- updated<br/>

  - **hubIdSimulated** ( string ): Unique hub/site Id from the client/partner dataset / point of view. This field is simulated by Clearly to support the client.
  
  - **fleetId** ( string ): Unique fleet Id from the client dataset / point of view. This field is provided by organisationId.

  - **fleetShortName** ( string ):  Fleet short name to which the vehicle belongs to (defined by Organisation). This is shown in UI/UX and Dashboards.

- renamed<br/>

  - **hubIdClient** ( string ): Unique hub/site Id from the client/partner dataset / point of view. This field is simulated by Clearly to support the client.

- added<br/>

  - **fleetIdOrganisation** ( string ): Unique fleet Id from the organisation dataset / point of view. This field is provided by organisationId.
  
### BaselineFleet

- updated<br/>

  - **baselineFleet** ( object ): Fleet baseline.
 
### FuelEmissionFactor

- updated<br/>

  - **coverage** ( string ):Region of the world (or context) covered by the emission factor. This can be very region specific (e.g. country,
      state) to the point that it fits a specific company/hub use case. Notice that some "oil/gas companies" are actively
      producing new fuel types that are more efficient (cleaner). Some of the options are:
      - EU
      - North America
      - International
      - Local/Organisation Specific (Ensure that details are provided in 'source').

  - **sourceType** ( string ):Very important aspect that helps define the data entry. If you think that other type of sources should be
      considere get in touch with Clearly team. We can identify the following main source types:
        - Official - GLEC (main source followed by most international standards)
        - Official - EN16258/JEC (NOT YET AVAILABLE, cited in GLEC and EU standards as an alternative)
        - Clearly - Organisation (Calculated with primary data and follows strict science based procedures & R&D).
 
### FuelType

- updated<br/>

  - **coverage** ( string ):Region of the world (or context) covered by the emission factor. This can be very region specific (e.g. country,
      state) to the point that it fits a specific company/hub use case. Notice that some "oil/gas companies" are actively
      producing new fuel types that are more efficient (cleaner). Some of the options are:
      - EU
      - North America
      - International
      - Local/Organisation Specific (Ensure that details are provided in 'source').
 
  - **sourceType** ( string ):Very important aspect that helps define the data entry. If you think that other type of sources should be
      considere get in touch with Clearly team. We can identify the following main source types:
        - Official - GLEC (main source followed by most international standards)
        - Official - EN16258/JEC (NOT YET AVAILABLE, cited in GLEC and EU standards as an alternative)
        - Clearly - Organisation (Calculated with primary data and follows strict science based procedures & R&D).

### Tyre

- updated<br/>

  - **tyreId** ( string ): Unique ID of this specific tyre setup by the organisation managing the tyres (Organisation's Id).
  
### VehicleTypeDefault

- updated<br/>

  - **coverage** ( string ):Region of the world (or context) covered by the emission factor. This can be very region specific (e.g. country,
      state) to the point that it fits a specific company/hub use case. Notice that some "oil/gas companies" are actively
      producing new fuel types that are more efficient (cleaner). Some of the options are:
      - EU
      - North America
      - International
      - Local/Organisation Specific (Ensure that details are provided in 'source').
 
  - **sourceType** ( string ):Very important aspect that helps define the data entry. If you think that other type of sources should be
      considere get in touch with Clearly team. We can identify the following main source types:
        - Official - GLEC (main source followed by most international standards)
        - Official - EN16258/JEC (NOT YET AVAILABLE, cited in GLEC and EU standards as an alternative)
        - Clearly - Organisation (Calculated with primary data and follows strict science based procedures & R&D).
 

    
 
