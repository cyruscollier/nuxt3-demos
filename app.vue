<template>
  <div>
    <TabGroup>
      <TabList class="inline-flex gap-4 border mb-4">
        <Tab v-slot="{ selected }" as="template"><button class="p-4" :class="selected ? 'bg-gray-300' : 'bg-gray-100'">Tab 1</button></Tab>
        <Tab v-slot="{ selected }" as="template"><button class="p-4" :class="selected ? 'bg-gray-300' : 'bg-gray-100'">Tab 2</button></Tab>
      </TabList>
      <TabPanels class="border p-4">
        <TabPanel>
          This is the content of the first tab panel.
        </TabPanel>
        <TabPanel>
          This is the content of the second tab panel.
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script>
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
export default {
  components: {TabPanel, TabPanels, Tab, TabList, TabGroup}
}
</script>
