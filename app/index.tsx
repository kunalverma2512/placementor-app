import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import client from "../sanityClient";

// // Configure Sanity Client
// const client = sanityClient({
//   projectId: "zltsypm6", // Your Sanity project ID
//   dataset: "production", // Dataset name
  
//   useCdn: true, // Use the Sanity CDN for faster response times
// });

export default function Index({ navigation }: { navigation: any }) {
  const [placementData, setPlacementData] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "placement"] {
            ...
          }
        `);
        console.log(data);
        setPlacementData(data);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchPlacements();
  }, []);

  const navigateTo = (page: string) => {
    navigation.navigate(page); 
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigateTo("AllPlacements")}>
          <Text style={[styles.tab, styles.activeTab]}>All Placements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("CompanyWise")}>
          <Text style={styles.tab}>Company-Wise</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("BranchWise")}>
          <Text style={styles.tab}>Branch-Wise</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity onPress={() => navigateTo("Role")}>
          <Text style={[styles.filter, styles.activeFilter]}>Role</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("OnCampus")}>
          <Text style={styles.filter}>On Campus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("OffCampus")}>
          <Text style={styles.filter}>Off Campus</Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView>
        {placementData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.companyName}</Text>
            <Text style={styles.cardSubtitle}>{item.role}</Text>
            {item.students.map((student: any, idx: number) => (
              // <Text key={idx} style={styles.student}>
              //   {${idx + 1}. ${student.name} ${student.branch}}
              // </Text>
              <Text key={idx} style={styles.student}>{`${idx + 1}. ${student.name}`}</Text>
            ))}
            <Text style={styles.congrats}>Congratulations to all!</Text>

            {/* Icons */}
            <View style={styles.cardIcons}>
              <TouchableOpacity>
                <Ionicons name="share-social-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="language" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "white",
    elevation: 1,
  },
  tab: { fontSize: 16, color: "gray" },
  activeTab: { fontWeight: "bold", color: "black", borderBottomWidth: 2, borderBottomColor: "black" },

  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    backgroundColor: "#eef1f5",
  },
  filter: { fontSize: 14, color: "gray" },
  activeFilter: { fontWeight: "bold", color: "black" },

  card: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  cardSubtitle: { fontSize: 14, color: "gray", marginBottom: 8 },
  student: { fontSize: 14, marginBottom: 4 },
  congrats: { fontSize: 14, fontWeight: "bold", marginTop: 8 },
  cardIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    gap: 16,
  },
});