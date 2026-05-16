import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. Load and Merge
real_df = pd.read_csv('datasets/health_training_data.csv')
synthetic_df = pd.read_csv('datasets/synthetic_health_data.csv')
final_df = pd.concat([real_df, synthetic_df], ignore_index=True)

# 2. Scaling
scaler = StandardScaler()
# Hum sirf clustering ke liye scale kar rahe hain
scaled_data = scaler.fit_transform(final_df)

# 3. Clustering
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
final_df['risk_cluster'] = kmeans.fit_predict(scaled_data)

# 4. Cluster Analysis (Yeh dekhne ke liye ki kaunsa group kya hai)
# Hum har cluster ka 'bmi' aur 'avg_steps' ka average nikalenge
analysis = final_df.groupby('risk_cluster')[['bmi', 'avg_steps', 'chronic_diseases']].mean()
print("Cluster Analysis (Means):")
print(analysis)

# Clusters ko meaningful names dena (aapke results ke base par)
cluster_map = {
    2: "Low Risk",      # Sabse zyada steps
    1: "Moderate Risk", # Kam steps
    0: "High Risk"      # Zyada chronic diseases aur high BMI
}

final_df['health_status'] = final_df['risk_cluster'].map(cluster_map)

#5. Final file save karein
final_df.to_csv('datasets/final_labeled_health_dataset.csv', index=False)


print("\n✅ New File Created: final_labeled_health_dataset.csv")
print("Is file mein 'risk_cluster' column add ho gaya hai.")