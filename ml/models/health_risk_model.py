import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib 


# 1. Dataset Load karein
df = pd.read_csv('datasets/final_labeled_health_dataset.csv')

# 2. Features (X) aur Target (y) select karein
# Hum wo columns hatayenge jo prediction mein kaam nahi aayenge
X = df.drop(['risk_cluster', 'health_status'], axis=1) 
y = df['risk_cluster']

# 3. Data ko Train aur Test sets mein baantein (80% Training, 20% Testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Random Forest Model banayein
model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5. Model Train karein
model.fit(X_train, y_train)

# 6. Accuracy check karein
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"🎯 Model Accuracy: {accuracy * 100:.2f}%")
# 7. Classification report
print("\n📝 Classification Report:")
print(classification_report(y_test, y_pred))

# 8. Model ko save karein (taaki Next.js mein use kar sakein)
joblib.dump(model, 'models/health_risk_model.pkl')
print("\n✅ Model saved as 'health_risk_model.pkl'")


# Check Feature Importance
# importances = model.feature_importances_
# feature_names = X.columns
# feature_importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': importances})
# feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# print("\n📊 Feature Importance (Model ne kya dekh kar predict kiya):")
# print(feature_importance_df)



