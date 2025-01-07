import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  const data = [
    { title: "Internship results for Google1", students: ["Student 1 (CSE)", "Student 2 (MnC)", "Student 3 (CSE)"] },
    { title: "Internship results for Google2", students: ["Student 2 (CSE)", "Student 3 (MnC)", "Student 4 (CSE)"] },
    { title: "Internship results for Google3", students: ["Student 3 (CSE)", "Student 4 (MnC)", "Student 5 (CSE)"] },
    { title: "Internship results for Google4", students: ["Student 4 (CSE)", "Student 5 (MnC)", "Student 6 (CSE)"] },
  ];

  return (
    <View style={styles.container} >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="filter-outline" size={24} color="black" />
        <Text style={styles.title}>Placement Daemon</Text>
        <View style={styles.icons}>
          <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>All</Text>
        <Text style={styles.tab}>Placements</Text>
        <Text style={styles.tab}>Company-Wise</Text>
        <Text style={styles.tab}>Branch-Wise</Text>
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <Text style={[styles.filter, styles.activeFilter]}>Both</Text>
        <Text style={styles.filter}>Role</Text>
        <Text style={styles.filter}>Off Campus</Text>
      </View>

      {/* Cards */}
      <ScrollView>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>On Campus</Text>
            {item.students.map((student, idx) => (
              <Text key={idx} style={styles.student}>{`${idx + 1}. ${student}`}</Text>
            ))}
            <Text style={styles.congrats}>Congratulations to all!</Text>
            {/* general text "placement Daemon" */}
            <Text style={styles.placementDaemon}>Placement Daemon</Text>

            {/* Icons */}
            <View style={styles.cardIcons}>
              <TouchableOpacity>
                <Ionicons name="share-social-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="language" size={20} color="black" />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  icons: { flexDirection: "row" },
  icon: { marginRight: 16 },

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
  placementDaemon: { fontSize: 12, marginTop: 8, color: "gray" },
  footer: { fontSize: 12, color: "gray", marginTop: 8 },

  cardIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    gap: 16,
  },
});
